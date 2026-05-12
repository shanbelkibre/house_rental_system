# AdminPage.jsx

## Code (numbered)

```jsx
     1	import { useEffect, useMemo, useState } from "react";
     2	import { Link } from "react-router-dom";
     3	import {
     4	  approveHouseAdmin,
     5	  createSubscriptionPlan,
     6	  deleteAdminUser,
     7	  deleteSubscriptionPlan,
     8	  getAdminReport,
     9	  getAdminUsers,
    10	  getAllHousesAdmin,
    11	  getPendingHouses,
    12	  getSavedAdminReport,
    13	  listSavedAdminReports,
    14	  listSubscriptionPlans,
    15	  rejectHouseAdmin,
    16	  removeHouseAdmin,
    17	  saveAdminReport,
    18	  suspendAdminUser,
    19	  updateSubscriptionPlan,
    20	  verifyAdminUser,
    21	} from "../services/api";
    22	
    23	import {
    24	  Alert,
    25	  Badge,
    26	  Button,
    27	  Card,
    28	  Input,
    29	  Modal,
    30	  Pagination,
    31	  Select,
    32	  Spinner,
    33	} from "../components/UI";
    34	
    35	const SECTIONS = [
    36	  { key: "revenue", label: "Revenue Report" },
    37	  { key: "view_reports", label: "View Reports" },
    38	  { key: "plans", label: "Manage Subscription Plans" },
    39	  { key: "verify_owner", label: "Verify House Owner" },
    40	  { key: "users", label: "Manage Users" },
    41	  { key: "approve_listing", label: "Approve House Listing" },
    42	  { key: "remove_listing", label: "Remove House Listing" },
    43	];
    44	
    45	function toIsoDateInput(v) {
    46	  if (!v) return "";
    47	  // Accept either Date, ISO string, or 'YYYY-MM-DD'
    48	  const d = typeof v === "string" ? new Date(v) : v;
    49	  if (Number.isNaN(d.getTime())) return "";
    50	  const yyyy = d.getFullYear();
    51	  const mm = String(d.getMonth() + 1).padStart(2, "0");
    52	  const dd = String(d.getDate()).padStart(2, "0");
    53	  return `${yyyy}-${mm}-${dd}`;
    54	}
    55	import { toStorageUrl } from "../utils/media";
    56	
    57	function money(v) {
    58	  const n = Number(v || 0);
    59	  return Number.isFinite(n) ? n.toLocaleString() : "0";
    60	}
    61	
    62	export default function AdminPage() {
    63	  const [section, setSection] = useState("revenue");
    64	  const [loading, setLoading] = useState(false);
    65	  const [error, setError] = useState("");
    66	  const [success, setSuccess] = useState("");
    67	
    68	  // Revenue report
    69	  const [reportStart, setReportStart] = useState(() =>
    70	    toIsoDateInput(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)),
    71	  );
    72	  const [reportEnd, setReportEnd] = useState(() => toIsoDateInput(new Date()));
    73	  const [report, setReport] = useState(null);
    74	  const [saveReportOpen, setSaveReportOpen] = useState(false);
    75	  const [saveReportName, setSaveReportName] = useState("");
    76	
    77	  // Saved reports
    78	  const [savedReports, setSavedReports] = useState(null);
    79	  const [savedReportsPage, setSavedReportsPage] = useState(1);
    80	  const [viewReportId, setViewReportId] = useState(null);
    81	  const [viewReportData, setViewReportData] = useState(null);
    82	
    83	  // Subscription plans
    84	  const [plansRes, setPlansRes] = useState(null);
    85	  const [plansPage, setPlansPage] = useState(1);
    86	  const [planModalOpen, setPlanModalOpen] = useState(false);
    87	  const [planEditing, setPlanEditing] = useState(null);
    88	  const [planForm, setPlanForm] = useState({
    89	    name: "",
    90	    price: "",
    91	    duration_days: 30,
    92	    is_active: true,
    93	  });
    94	
    95	  // Verify owner
    96	  const [verifyOwnersRes, setVerifyOwnersRes] = useState(null);
    97	  const [verifyOwnersPage, setVerifyOwnersPage] = useState(1);
    98	  const [verifyOwnersQ, setVerifyOwnersQ] = useState("");
    99	
   100	  // Manage users
   101	  const [usersRes, setUsersRes] = useState(null);
   102	  const [usersPage, setUsersPage] = useState(1);
   103	  const [usersQ, setUsersQ] = useState("");
   104	  const [usersRole, setUsersRole] = useState("");
   105	
   106	  // Approve listing
   107	  const [pendingRes, setPendingRes] = useState(null);
   108	  const [pendingPage, setPendingPage] = useState(1);
   109	
   110	  // Remove listing
   111	  const [allHousesRes, setAllHousesRes] = useState(null);
   112	  const [allHousesPage, setAllHousesPage] = useState(1);
   113	  const [removeModal, setRemoveModal] = useState({ open: false, house: null });
   114	  const [removeReason, setRemoveReason] = useState("");
   115	
   116	  const sidebarItems = useMemo(() => SECTIONS, []);
   117	
   118	  const flash = (msg) => {
   119	    setSuccess(msg);
   120	    setTimeout(() => setSuccess(""), 2500);
   121	  };
   122	
   123	  const fail = (e, fallback = "Something went wrong") => {
   124	    setError(e?.response?.data?.message || fallback);
   125	  };
   126	
   127	  // Load data based on active section
   128	  useEffect(() => {
   129	    (async () => {
   130	      setError("");
   131	      setSuccess("");
   132	      setLoading(true);
   133	      try {
   134	        if (section === "revenue") {
   135	          const { data } = await getAdminReport({
   136	            start_date: reportStart,
   137	            end_date: reportEnd,
   138	          });
   139	          setReport(data);
   140	        }
   141	
   142	        if (section === "view_reports") {
   143	          const { data } = await listSavedAdminReports({
   144	            page: savedReportsPage,
   145	            per_page: 20,
   146	          });
   147	          setSavedReports(data);
   148	        }
   149	
   150	        if (section === "plans") {
   151	          const { data } = await listSubscriptionPlans({
   152	            page: plansPage,
   153	            per_page: 20,
   154	          });
   155	          setPlansRes(data);
   156	        }
   157	
   158	        if (section === "verify_owner") {
   159	          const { data } = await getAdminUsers({
   160	            page: verifyOwnersPage,
   161	            per_page: 20,
   162	            role: "owner",
   163	            verified: false,
   164	            q: verifyOwnersQ || undefined,
   165	          });
   166	          setVerifyOwnersRes(data);
   167	        }
   168	
   169	        if (section === "users") {
   170	          const { data } = await getAdminUsers({
   171	            page: usersPage,
   172	            per_page: 20,
   173	            role: usersRole || undefined,
   174	            q: usersQ || undefined,
   175	          });
   176	          setUsersRes(data);
   177	        }
   178	
   179	        if (section === "approve_listing") {
   180	          const { data } = await getPendingHouses({ page: pendingPage });
   181	          setPendingRes(data);
   182	        }
   183	
   184	        if (section === "remove_listing") {
   185	          const { data } = await getAllHousesAdmin({ page: allHousesPage });
   186	          setAllHousesRes(data);
   187	        }
   188	      } catch (e) {
   189	        fail(e, "Failed to load data");
   190	      } finally {
   191	        setLoading(false);
   192	      }
   193	    })();
   194	  }, [
   195	    section,
   196	    reportStart,
   197	    reportEnd,
   198	    savedReportsPage,
   199	    plansPage,
   200	    verifyOwnersPage,
   201	    verifyOwnersQ,
   202	    usersPage,
   203	    usersQ,
   204	    usersRole,
   205	    pendingPage,
   206	    allHousesPage,
   207	  ]);
   208	
   209	  // ===== Actions =====
   210	  const onGenerateReport = async () => {
   211	    setLoading(true);
   212	    setError("");
   213	    try {
   214	      const { data } = await getAdminReport({
   215	        start_date: reportStart,
   216	        end_date: reportEnd,
   217	      });
   218	      setReport(data);
   219	      flash("Report generated");
   220	    } catch (e) {
   221	      fail(e, "Failed to generate report");
   222	    } finally {
   223	      setLoading(false);
   224	    }
   225	  };
   226	
   227	  const onSaveReport = async () => {
   228	    setLoading(true);
   229	    setError("");
   230	    try {
   231	      await saveAdminReport({
   232	        name: saveReportName,
   233	        start_date: reportStart,
   234	        end_date: reportEnd,
   235	      });
   236	      setSaveReportOpen(false);
   237	      setSaveReportName("");
   238	      flash("Report saved");
   239	    } catch (e) {
   240	      fail(e, "Failed to save report");
   241	    } finally {
   242	      setLoading(false);
   243	    }
   244	  };
   245	
   246	  const onOpenSavedReport = async (id) => {
   247	    setViewReportId(id);
   248	    setViewReportData(null);
   249	    setLoading(true);
   250	    setError("");
   251	    try {
   252	      const { data } = await getSavedAdminReport(id);
   253	      setViewReportData(data);
   254	    } catch (e) {
   255	      fail(e, "Failed to load report");
   256	    } finally {
   257	      setLoading(false);
   258	    }
   259	  };
   260	
   261	  const onVerifyUser = async (id) => {
   262	    setLoading(true);
   263	    setError("");
   264	    try {
   265	      await verifyAdminUser(id);
   266	      flash("Owner verified");
   267	      // reload current list
   268	      const { data } = await getAdminUsers({
   269	        page: verifyOwnersPage,
   270	        per_page: 20,
   271	        role: "owner",
   272	        verified: false,
   273	        q: verifyOwnersQ || undefined,
   274	      });
   275	      setVerifyOwnersRes(data);
   276	    } catch (e) {
   277	      fail(e, "Failed to verify user");
   278	    } finally {
   279	      setLoading(false);
   280	    }
   281	  };
   282	
   283	  const onToggleSuspend = async (u) => {
   284	    setLoading(true);
   285	    setError("");
   286	    try {
   287	      await suspendAdminUser(u.id, !u.is_suspended);
   288	      flash(u.is_suspended ? "User unsuspended" : "User suspended");
   289	      const { data } = await getAdminUsers({
   290	        page: usersPage,
   291	        per_page: 20,
   292	        role: usersRole || undefined,
   293	        q: usersQ || undefined,
   294	      });
   295	      setUsersRes(data);
   296	    } catch (e) {
   297	      fail(e, "Failed to update user");
   298	    } finally {
   299	      setLoading(false);
   300	    }
   301	  };
   302	
   303	  const onDeleteUser = async (u) => {
   304	    if (!confirm(`Delete user ${u.name}?`)) return;
   305	    setLoading(true);
   306	    setError("");
   307	    try {
   308	      await deleteAdminUser(u.id);
   309	      flash("User deleted");
   310	      const { data } = await getAdminUsers({
   311	        page: usersPage,
   312	        per_page: 20,
   313	        role: usersRole || undefined,
   314	        q: usersQ || undefined,
   315	      });
   316	      setUsersRes(data);
   317	    } catch (e) {
   318	      fail(e, "Failed to delete user");
   319	    } finally {
   320	      setLoading(false);
   321	    }
   322	  };
   323	
   324	  const onApproveHouse = async (id) => {
   325	    setLoading(true);
   326	    setError("");
   327	    try {
   328	      await approveHouseAdmin(id);
   329	      flash("House approved");
   330	      const { data } = await getPendingHouses({ page: pendingPage });
   331	      setPendingRes(data);
   332	    } catch (e) {
   333	      fail(e, "Failed to approve house");
   334	    } finally {
   335	      setLoading(false);
   336	    }
   337	  };
   338	
   339	  const onRejectHouse = async (id) => {
   340	    if (!confirm("Reject and remove this listing?")) return;
   341	    setLoading(true);
   342	    setError("");
   343	    try {
   344	      await rejectHouseAdmin(id);
   345	      flash("House rejected");
   346	      const { data } = await getPendingHouses({ page: pendingPage });
   347	      setPendingRes(data);
   348	    } catch (e) {
   349	      fail(e, "Failed to reject house");
   350	    } finally {
   351	      setLoading(false);
   352	    }
   353	  };
   354	
   355	  const onRemoveHouse = async () => {
   356	    const house = removeModal.house;
   357	    if (!house) return;
   358	    setLoading(true);
   359	    setError("");
   360	    try {
   361	      await removeHouseAdmin(house.id, removeReason || undefined);
   362	      setRemoveModal({ open: false, house: null });
   363	      setRemoveReason("");
   364	      flash("Listing removed");
   365	      const { data } = await getAllHousesAdmin({ page: allHousesPage });
   366	      setAllHousesRes(data);
   367	    } catch (e) {
   368	      fail(e, "Failed to remove house");
   369	    } finally {
   370	      setLoading(false);
   371	    }
   372	  };
   373	
   374	  const openCreatePlan = () => {
   375	    setPlanEditing(null);
   376	    setPlanForm({ name: "", price: "", duration_days: 30, is_active: true });
   377	    setPlanModalOpen(true);
   378	  };
   379	
   380	  const openEditPlan = (p) => {
   381	    setPlanEditing(p);
   382	    setPlanForm({
   383	      name: p.name || "",
   384	      price: String(p.price ?? ""),
   385	      duration_days: Number(p.duration_days ?? 30),
   386	      is_active: !!p.is_active,
   387	    });
   388	    setPlanModalOpen(true);
   389	  };
   390	
   391	  const onSavePlan = async () => {
   392	    setLoading(true);
   393	    setError("");
   394	    try {
   395	      const payload = {
   396	        name: planForm.name,
   397	        price: Number(planForm.price),
   398	        duration_days: Number(planForm.duration_days),
   399	        is_active: !!planForm.is_active,
   400	      };
   401	      if (planEditing) {
   402	        await updateSubscriptionPlan(planEditing.id, payload);
   403	        flash("Plan updated");
   404	      } else {
   405	        await createSubscriptionPlan(payload);
   406	        flash("Plan created");
   407	      }
   408	      setPlanModalOpen(false);
   409	      const { data } = await listSubscriptionPlans({
   410	        page: plansPage,
   411	        per_page: 20,
   412	      });
   413	      setPlansRes(data);
   414	    } catch (e) {
   415	      fail(e, "Failed to save plan");
   416	    } finally {
   417	      setLoading(false);
   418	    }
   419	  };
   420	
   421	  const onDeletePlan = async (p) => {
   422	    if (!confirm(`Delete plan ${p.name}?`)) return;
   423	    setLoading(true);
   424	    setError("");
   425	    try {
   426	      await deleteSubscriptionPlan(p.id);
   427	      flash("Plan deleted");
   428	      const { data } = await listSubscriptionPlans({
   429	        page: plansPage,
   430	        per_page: 20,
   431	      });
   432	      setPlansRes(data);
   433	    } catch (e) {
   434	      fail(e, "Failed to delete plan");
   435	    } finally {
   436	      setLoading(false);
   437	    }
   438	  };
   439	
   440	  const paymentMethods = report?.payment_methods || [];
   441	  const dailyRevenue = report?.daily_revenue || [];
   442	
   443	
   444	  return (
   445	    <div className="max-w-7xl mx-auto px-4 pt-28 pb-10">
   446	      <div className="mb-6">
   447	        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
   448	        <p className="text-white/70 text-sm">Manage system operations</p>
   449	      </div>
   450	
   451	      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
   452	        <div className="lg:col-span-3">
   453	          <Card className="p-4">
   454	            <p className="text-xs font-semibold text-gray-500 mb-3">
   455	              ADMIN FUNCTIONS
   456	            </p>
   457	            <div className="space-y-1">
   458	              {sidebarItems.map((it) => (
   459	                <button
   460	                  key={it.key}
   461	                  onClick={() => setSection(it.key)}
   462	                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
   463	                    section === it.key
   464	                      ? "bg-blue-50 text-blue-700"
   465	                      : "text-gray-700 hover:bg-gray-50"
   466	                  }`}
   467	                >
   468	                  {it.label}
   469	                </button>
   470	              ))}
   471	            </div>
   472	          </Card>
   473	        </div>
   474	
   475	        <div className="lg:col-span-9 space-y-4">
   476	          {success && <Alert type="success" message={success} />}
   477	          {error && <Alert type="error" message={error} />}
   478	
   479	          {loading ? (
   480	            <div className="flex justify-center py-20">
   481	              <Spinner size={12} />
   482	            </div>
   483	          ) : (
   484	            <>
   485	              {/* Revenue Report */}
   486	              {section === "revenue" && (
   487	                <Card>
   488	                  <div className="flex items-start justify-between gap-4 flex-wrap">
   489	                    <div>
   490	                      <h2 className="text-lg font-semibold text-gray-800">
   491	                        Revenue Report
   492	                      </h2>
   493	                      <p className="text-sm text-gray-500">
   494	                        Generate report by date range
   495	                      </p>
   496	                    </div>
   497	                    <div className="flex gap-2">
   498	                      <Button
   499	                        variant="outline"
   500	                        onClick={() => setSaveReportOpen(true)}
   501	                        disabled={!report}
   502	                      >
   503	                        Save Report
   504	                      </Button>
   505	                      <Button onClick={onGenerateReport}>Generate</Button>
   506	                    </div>
   507	                  </div>
   508	
   509	                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
   510	                    <Input
   511	                      label="Start Date"
   512	                      type="date"
   513	                      value={reportStart}
   514	                      onChange={(e) => setReportStart(e.target.value)}
   515	                    />
   516	                    <Input
   517	                      label="End Date"
   518	                      type="date"
   519	                      value={reportEnd}
   520	                      onChange={(e) => setReportEnd(e.target.value)}
   521	                    />
   522	                  </div>
   523	
   524	                  {!report ? (
   525	                    <p className="text-sm text-gray-400 mt-4">
   526	                      No report loaded.
   527	                    </p>
   528	                  ) : (
   529	                    <>
   530	                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
   531	                        <div className="rounded-2xl p-4 bg-blue-50 text-blue-800">
   532	                          <p className="text-xs font-semibold">Revenue (ETB)</p>
   533	                          <p className="text-2xl font-bold mt-1">
   534	                            {money(report.subscription_revenue)}
   535	                          </p>
   536	                        </div>
   537	                        <div className="rounded-2xl p-4 bg-green-50 text-green-800">
   538	                          <p className="text-xs font-semibold">
   539	                            Users Registered
   540	                          </p>
   541	                          <p className="text-2xl font-bold mt-1">
   542	                            {report.users_registered}
   543	                          </p>
   544	                        </div>
   545	                        <div className="rounded-2xl p-4 bg-purple-50 text-purple-800">
   546	                          <p className="text-xs font-semibold">Houses Listed</p>
   547	                          <p className="text-2xl font-bold mt-1">
   548	                            {report.houses_listed}
   549	                          </p>
   550	                        </div>
   551	                        <div className="rounded-2xl p-4 bg-yellow-50 text-yellow-800">
   552	                          <p className="text-xs font-semibold">Requests Made</p>
   553	                          <p className="text-2xl font-bold mt-1">
   554	                            {report.requests_made}
   555	                          </p>
   556	                        </div>
   557	                        <div className="rounded-2xl p-4 bg-gray-50 text-gray-800">
   558	                          <p className="text-xs font-semibold">Active Users</p>
   559	                          <p className="text-2xl font-bold mt-1">
   560	                            {report.active_users}
   561	                          </p>
   562	                        </div>
   563	                        <div className="rounded-2xl p-4 bg-gray-50 text-gray-800">
   564	                          <p className="text-xs font-semibold">Total Houses</p>
   565	                          <p className="text-2xl font-bold mt-1">
   566	                            {report.total_houses}
   567	                          </p>
   568	                        </div>
   569	                      </div>
   570	
   571	                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
   572	                        <div>
   573	                          <h3 className="font-semibold text-gray-700 mb-2">
   574	                            Payment Methods
   575	                          </h3>
   576	                          <div className="border rounded-xl overflow-hidden">
   577	                            <table className="w-full text-sm">
   578	                              <thead className="bg-gray-50 text-gray-600">
   579	                                <tr>
   580	                                  <th className="text-left px-3 py-2">
   581	                                    Method
   582	                                  </th>
   583	                                  <th className="text-right px-3 py-2">
   584	                                    Total (ETB)
   585	                                  </th>
   586	                                </tr>
   587	                              </thead>
   588	                              <tbody>
   589	                                {paymentMethods.length === 0 ? (
   590	                                  <tr>
   591	                                    <td
   592	                                      className="px-3 py-3 text-gray-400"
   593	                                      colSpan={2}
   594	                                    >
   595	                                      No payments in range
   596	                                    </td>
   597	                                  </tr>
   598	                                ) : (
   599	                                  paymentMethods.map((p, idx) => (
   600	                                    <tr key={idx} className="border-t">
   601	                                      <td className="px-3 py-2 text-gray-700">
   602	                                        {p.payment_method || "—"}
   603	                                      </td>
   604	                                      <td className="px-3 py-2 text-right text-gray-700">
   605	                                        {money(p.total)}
   606	                                      </td>
   607	                                    </tr>
   608	                                  ))
   609	                                )}
   610	                              </tbody>
   611	                            </table>
   612	                          </div>
   613	                        </div>
   614	
   615	                        <div>
   616	                          <h3 className="font-semibold text-gray-700 mb-2">
   617	                            Daily Revenue
   618	                          </h3>
   619	                          <div className="border rounded-xl overflow-hidden">
   620	                            <table className="w-full text-sm">
   621	                              <thead className="bg-gray-50 text-gray-600">
   622	                                <tr>
   623	                                  <th className="text-left px-3 py-2">Date</th>
   624	                                  <th className="text-right px-3 py-2">
   625	                                    Total (ETB)
   626	                                  </th>
   627	                                </tr>
   628	                              </thead>
   629	                              <tbody>
   630	                                {dailyRevenue.length === 0 ? (
   631	                                  <tr>
   632	                                    <td
   633	                                      className="px-3 py-3 text-gray-400"
   634	                                      colSpan={2}
   635	                                    >
   636	                                      No payments in range
   637	                                    </td>
   638	                                  </tr>
   639	                                ) : (
   640	                                  dailyRevenue.map((d, idx) => (
   641	                                    <tr key={idx} className="border-t">
   642	                                      <td className="px-3 py-2 text-gray-700">
   643	                                        {d.date}
   644	                                      </td>
   645	                                      <td className="px-3 py-2 text-right text-gray-700">
   646	                                        {money(d.total)}
   647	                                      </td>
   648	                                    </tr>
   649	                                  ))
   650	                                )}
   651	                              </tbody>
   652	                            </table>
   653	                          </div>
   654	                        </div>
   655	                      </div>
   656	                    </>
   657	                  )}
   658	                </Card>
   659	              )}
   660	
   661	              {/* View Reports */}
   662	              {section === "view_reports" && (
   663	                <Card>
   664	                  <div className="flex items-start justify-between gap-4 flex-wrap">
   665	                    <div>
   666	                      <h2 className="text-lg font-semibold text-gray-800">
   667	                        Saved Reports
   668	                      </h2>
   669	                      <p className="text-sm text-gray-500">
   670	                        View previously generated reports
   671	                      </p>
   672	                    </div>
   673	                    <Button
   674	                      variant="outline"
   675	                      onClick={() => setSection("revenue")}
   676	                    >
   677	                      Generate New
   678	                    </Button>
   679	                  </div>
   680	
   681	                  <div className="mt-4 space-y-3">
   682	                    {(savedReports?.data || []).length === 0 ? (
   683	                      <p className="text-sm text-gray-400">No saved reports.</p>
   684	                    ) : (
   685	                      (savedReports?.data || []).map((r) => (
   686	                        <div
   687	                          key={r.id}
   688	                          className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
   689	                        >
   690	                          <div>
   691	                            <p className="font-medium text-gray-800">
   692	                              {r.name}
   693	                            </p>
   694	                            <p className="text-xs text-gray-500">
   695	                              {r.start_date
   696	                                ? toIsoDateInput(r.start_date)
   697	                                : "—"}{" "}
   698	                              → {r.end_date ? toIsoDateInput(r.end_date) : "—"}
   699	                              {r.user?.name ? ` · by ${r.user.name}` : ""}
   700	                            </p>
   701	                          </div>
   702	                          <Button
   703	                            variant="outline"
   704	                            onClick={() => onOpenSavedReport(r.id)}
   705	                          >
   706	                            View
   707	                          </Button>
   708	                        </div>
   709	                      ))
   710	                    )}
   711	                  </div>
   712	
   713	                  <Pagination
   714	                    meta={savedReports}
   715	                    onPage={setSavedReportsPage}
   716	                  />
   717	                </Card>
   718	              )}
   719	
   720	              {/* Manage Subscription Plans */}
   721	              {section === "plans" && (
   722	                <Card>
   723	                  <div className="flex items-start justify-between gap-4 flex-wrap">
   724	                    <div>
   725	                      <h2 className="text-lg font-semibold text-gray-800">
   726	                        Subscription Plans
   727	                      </h2>
   728	                      <p className="text-sm text-gray-500">
   729	                        Create, edit, and remove plans
   730	                      </p>
   731	                    </div>
   732	                    <Button onClick={openCreatePlan}>Add Plan</Button>
   733	                  </div>
   734	
   735	                  <div className="mt-4 space-y-3">
   736	                    {(plansRes?.data || []).length === 0 ? (
   737	                      <p className="text-sm text-gray-400">No plans created.</p>
   738	                    ) : (
   739	                      (plansRes?.data || []).map((p) => (
   740	                        <div
   741	                          key={p.id}
   742	                          className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
   743	                        >
   744	                          <div>
   745	                            <p className="font-medium text-gray-800">
   746	                              {p.name}
   747	                            </p>
   748	                            <p className="text-sm text-gray-500">
   749	                              ETB {money(p.price)} · {p.duration_days} days
   750	                            </p>
   751	                            <div className="mt-1">
   752	                              <Badge
   753	                                label={p.is_active ? "Active" : "Inactive"}
   754	                                color={p.is_active ? "green" : "gray"}
   755	                              />
   756	                            </div>
   757	                          </div>
   758	                          <div className="flex gap-2">
   759	                            <Button
   760	                              variant="outline"
   761	                              onClick={() => openEditPlan(p)}
   762	                            >
   763	                              Edit
   764	                            </Button>
   765	                            <Button
   766	                              variant="danger"
   767	                              onClick={() => onDeletePlan(p)}
   768	                            >
   769	                              Delete
   770	                            </Button>
   771	                          </div>
   772	                        </div>
   773	                      ))
   774	                    )}
   775	                  </div>
   776	
   777	                  <Pagination meta={plansRes} onPage={setPlansPage} />
   778	                </Card>
   779	              )}
   780	
   781	              {/* Verify House Owner */}
   782	              {section === "verify_owner" && (
   783	                <Card>
   784	                  <div className="flex items-start justify-between gap-4 flex-wrap">
   785	                    <div>
   786	                      <h2 className="text-lg font-semibold text-gray-800">
   787	                        Verify House Owners
   788	                      </h2>
   789	                      <p className="text-sm text-gray-500">
   790	                        Approve owner accounts for posting listings
   791	                      </p>
   792	                    </div>
   793	                  </div>
   794	
   795	                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
   796	                    <Input
   797	                      label="Search"
   798	                      placeholder="Name or email"
   799	                      value={verifyOwnersQ}
   800	                      onChange={(e) => {
   801	                        setVerifyOwnersPage(1);
   802	                        setVerifyOwnersQ(e.target.value);
   803	                      }}
   804	                    />
   805	                  </div>
   806	
   807	                  <div className="mt-4 space-y-3">
   808	                    {(verifyOwnersRes?.data || []).length === 0 ? (
   809	                      <p className="text-sm text-gray-400">
   810	                        No unverified owners.
   811	                      </p>
   812	                    ) : (
   813	                      (verifyOwnersRes?.data || []).map((u) => (
   814	                        <div
   815	                          key={u.id}
   816	                          className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
   817	                        >
   818	                          <div>
   819	                            <p className="font-medium text-gray-800">
   820	                              {u.name}
   821	                            </p>
   822	                            <p className="text-sm text-gray-500">
   823	                              {u.email} · {u.phone || "No phone"}
   824	                            </p>
   825	                            <div className="flex gap-2 mt-1 flex-wrap">
   826	                              <Badge label="owner" color="blue" />
   827	                              <Badge
   828	                                label={
   829	                                  u.is_verified ? "Verified" : "Unverified"
   830	                                }
   831	                                color={u.is_verified ? "green" : "yellow"}
   832	                              />
   833	                              <Badge
   834	                                label={`Houses: ${u.houses_count ?? 0}`}
   835	                                color="gray"
   836	                              />
   837	                            </div>
   838	                          </div>
   839	                          <Button
   840	                            variant="success"
   841	                            onClick={() => onVerifyUser(u.id)}
   842	                          >
   843	                            Verify
   844	                          </Button>
   845	                        </div>
   846	                      ))
   847	                    )}
   848	                  </div>
   849	
   850	                  <Pagination
   851	                    meta={verifyOwnersRes}
   852	                    onPage={setVerifyOwnersPage}
   853	                  />
   854	                </Card>
   855	              )}
   856	
   857	              {/* Manage Users */}
   858	              {section === "users" && (
   859	                <Card>
   860	                  <div className="flex items-start justify-between gap-4 flex-wrap">
   861	                    <div>
   862	                      <h2 className="text-lg font-semibold text-gray-800">
   863	                        Manage Users
   864	                      </h2>
   865	                      <p className="text-sm text-gray-500">
   866	                        Search, suspend, or delete users
   867	                      </p>
   868	                    </div>
   869	                  </div>
   870	
   871	                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
   872	                    <Input
   873	                      label="Search"
   874	                      placeholder="Name or email"
   875	                      value={usersQ}
   876	                      onChange={(e) => {
   877	                        setUsersPage(1);
   878	                        setUsersQ(e.target.value);
   879	                      }}
   880	                    />
   881	                    <Select
   882	                      label="Role"
   883	                      value={usersRole}
   884	                      onChange={(e) => {
   885	                        setUsersPage(1);
   886	                        setUsersRole(e.target.value);
   887	                      }}
   888	                    >
   889	                      <option value="">All</option>
   890	                      <option value="owner">Owner</option>
   891	                      <option value="renter">Renter</option>
   892	                      <option value="admin">Admin</option>
   893	                    </Select>
   894	                  </div>
   895	
   896	                  <div className="mt-4 space-y-3">
   897	                    {(usersRes?.data || []).length === 0 ? (
   898	                      <p className="text-sm text-gray-400">No users found.</p>
   899	                    ) : (
   900	                      (usersRes?.data || []).map((u) => (
   901	                        <div
   902	                          key={u.id}
   903	                          className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
   904	                        >
   905	                          <div>
   906	                            <p className="font-medium text-gray-800">
   907	                              {u.name}
   908	                            </p>
   909	                            <p className="text-sm text-gray-500">
   910	                              {u.email} · {u.phone || "No phone"}
   911	                            </p>
   912	                            <div className="flex gap-2 mt-1 flex-wrap">
   913	                              <Badge
   914	                                label={u.role}
   915	                                color={
   916	                                  u.role === "admin"
   917	                                    ? "gray"
   918	                                    : u.role === "owner"
   919	                                      ? "blue"
   920	                                      : "green"
   921	                                }
   922	                              />
   923	                              <Badge
   924	                                label={
   925	                                  u.is_verified ? "Verified" : "Unverified"
   926	                                }
   927	                                color={u.is_verified ? "green" : "yellow"}
   928	                              />
   929	                              {u.is_suspended && (
   930	                                <Badge label="Suspended" color="red" />
   931	                              )}
   932	                              <Badge
   933	                                label={`Houses: ${u.houses_count ?? 0}`}
   934	                                color="gray"
   935	                              />
   936	                            </div>
   937	                          </div>
   938	                          <div className="flex gap-2 flex-wrap justify-end">
   939	                            {u.role !== "admin" && (
   940	                              <Button
   941	                                variant="outline"
   942	                                onClick={() => onToggleSuspend(u)}
   943	                              >
   944	                                {u.is_suspended ? "Unsuspend" : "Suspend"}
   945	                              </Button>
   946	                            )}
   947	                            {u.role !== "admin" && (
   948	                              <Button
   949	                                variant="danger"
   950	                                onClick={() => onDeleteUser(u)}
   951	                              >
   952	                                Delete
   953	                              </Button>
   954	                            )}
   955	                          </div>
   956	                        </div>
   957	                      ))
   958	                    )}
   959	                  </div>
   960	
   961	                  <Pagination meta={usersRes} onPage={setUsersPage} />
   962	                </Card>
   963	              )}
   964	
   965	              {/* Approve House Listing */}
   966	              {section === "approve_listing" && (
   967	                <Card>
   968	                  <div>
   969	                    <h2 className="text-lg font-semibold text-gray-800">
   970	                      Pending House Listings
   971	                    </h2>
   972	                    <p className="text-sm text-gray-500">
   973	                      Approve or reject new listings
   974	                    </p>
   975	                  </div>
   976	
   977	                  <div className="mt-4 space-y-3">
   978	                    {(pendingRes?.data || []).length === 0 ? (
   979	                      <div className="text-center py-12 text-gray-400">
   980	                        <div className="text-5xl mb-3">🎉</div>
   981	                        <p>No pending listings.</p>
   982	                      </div>
   983	                    ) : (
   984	                      (pendingRes?.data || []).map((h) => {
   985	                        const img = toStorageUrl(h.images?.[0]?.image_path);
   986	                        return (
   987	                          <div
   988	                            key={h.id}
   989	                            className="border border-gray-100 rounded-2xl p-4 flex items-start justify-between gap-4"
   990	                          >
   991	                            <div className="flex gap-4">
   992	                              <Link to={`/houses/${h.id}`} target="_blank" className="w-20 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 block hover:opacity-80 transition-opacity">
   993	                                {img ? (
   994	                                  <img
   995	                                    src={img}
   996	                                    alt=""
   997	                                    className="w-full h-full object-cover"
   998	                                  />
   999	                                ) : (
  1000	                                  <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">
  1001	                                    🏠
  1002	                                  </div>
  1003	                                )}
  1004	                              </Link>
  1005	                              <div>
  1006	                                <Link to={`/houses/${h.id}`} target="_blank" className="font-medium text-blue-400 hover:underline">
  1007	                                  {h.title}
  1008	                                </Link>
  1009	                                <p className="text-sm text-gray-500">
  1010	                                  📍 {h.location} · ETB {money(h.price)}/mo · 🛏{" "}
  1011	                                  {h.rooms} rooms
  1012	                                </p>
  1013	                                <p className="text-xs text-gray-400 mt-1">
  1014	                                  Owner: {h.owner?.name}
  1015	                                </p>
  1016	                              </div>
  1017	                            </div>
  1018	                            <div className="flex gap-2 flex-shrink-0">
  1019	                              <Link
  1020	                                to={`/houses/${h.id}`}
  1021	                                target="_blank"
  1022	                                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all border border-gray-300 text-gray-700 hover:bg-gray-50"
  1023	                              >
  1024	                                View
  1025	                              </Link>
  1026	                              <Button
  1027	                                variant="success"
  1028	                                onClick={() => onApproveHouse(h.id)}
  1029	                              >
  1030	                                Approve
  1031	                              </Button>
  1032	                              <Button
  1033	                                variant="danger"
  1034	                                onClick={() => onRejectHouse(h.id)}
  1035	                              >
  1036	                                Reject
  1037	                              </Button>
  1038	                            </div>
  1039	                          </div>
  1040	                        );
  1041	                      })
  1042	                    )}
  1043	                  </div>
  1044	
  1045	                  <Pagination meta={pendingRes} onPage={setPendingPage} />
  1046	                </Card>
  1047	              )}
  1048	
  1049	              {/* Remove House Listing */}
  1050	              {section === "remove_listing" && (
  1051	                <Card>
  1052	                  <div>
  1053	                    <h2 className="text-lg font-semibold text-gray-800">
  1054	                      Remove House Listing
  1055	                    </h2>
  1056	                    <p className="text-sm text-gray-500">
  1057	                      Remove listings that violate policies
  1058	                    </p>
  1059	                  </div>
  1060	
  1061	                  <div className="mt-4 space-y-3">
  1062	                    {(allHousesRes?.data || []).length === 0 ? (
  1063	                      <p className="text-sm text-gray-400">No houses found.</p>
  1064	                    ) : (
  1065	                      (allHousesRes?.data || []).map((h) => {
  1066	                        const img = toStorageUrl(h.images?.[0]?.image_path);
  1067	                        return (
  1068	                          <div
  1069	                            key={h.id}
  1070	                            className="border border-gray-100 rounded-2xl p-4 flex items-start justify-between gap-4"
  1071	                          >
  1072	                            <div className="flex gap-4">
  1073	                              <div className="w-20 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
  1074	                                {img ? (
  1075	                                  <img
  1076	                                    src={img}
  1077	                                    alt=""
  1078	                                    className="w-full h-full object-cover"
  1079	                                  />
  1080	                                ) : (
  1081	                                  <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">
  1082	                                    🏠
  1083	                                  </div>
  1084	                                )}
  1085	                              </div>
  1086	                              <div>
  1087	                                <p className="font-medium text-gray-800">
  1088	                                  {h.title}
  1089	                                </p>
  1090	                                <p className="text-sm text-gray-500">
  1091	                                  📍 {h.location} · ETB {money(h.price)}/mo
  1092	                                </p>
  1093	                                <div className="flex gap-2 mt-1 flex-wrap">
  1094	                                  <Badge
  1095	                                    label={h.status}
  1096	                                    color={
  1097	                                      h.status === "available" ? "green" : "red"
  1098	                                    }
  1099	                                  />
  1100	                                  <Badge
  1101	                                    label={
  1102	                                      h.is_approved ? "Approved" : "Pending"
  1103	                                    }
  1104	                                    color={h.is_approved ? "blue" : "yellow"}
  1105	                                  />
  1106	                                  {h.owner?.name && (
  1107	                                    <Badge
  1108	                                      label={`Owner: ${h.owner.name}`}
  1109	                                      color="gray"
  1110	                                    />
  1111	                                  )}
  1112	                                </div>
  1113	                              </div>
  1114	                            </div>
  1115	                            <Button
  1116	                              variant="danger"
  1117	                              onClick={() => {
  1118	                                setRemoveModal({ open: true, house: h });
  1119	                                setRemoveReason("");
  1120	                              }}
  1121	                            >
  1122	                              Remove
  1123	                            </Button>
  1124	                          </div>
  1125	                        );
  1126	                      })
  1127	                    )}
  1128	                  </div>
  1129	
  1130	                  <Pagination meta={allHousesRes} onPage={setAllHousesPage} />
  1131	                </Card>
  1132	              )}
  1133	            </>
  1134	          )}
  1135	        </div>
  1136	      </div>
  1137	
  1138	      {/* Save report modal */}
  1139	      <Modal
  1140	        open={saveReportOpen}
  1141	        onClose={() => setSaveReportOpen(false)}
  1142	        title="Save Report"
  1143	      >
  1144	        <div className="space-y-4">
  1145	          <Input
  1146	            label="Report Name"
  1147	            placeholder="e.g. April Revenue"
  1148	            value={saveReportName}
  1149	            onChange={(e) => setSaveReportName(e.target.value)}
  1150	          />
  1151	          <div className="flex gap-2 justify-end">
  1152	            <Button variant="outline" onClick={() => setSaveReportOpen(false)}>
  1153	              Cancel
  1154	            </Button>
  1155	            <Button onClick={onSaveReport} disabled={!saveReportName.trim()}>
  1156	              Save
  1157	            </Button>
  1158	          </div>
  1159	        </div>
  1160	      </Modal>
  1161	
  1162	      {/* View report modal */}
  1163	      <Modal
  1164	        open={!!viewReportId}
  1165	        onClose={() => {
  1166	          setViewReportId(null);
  1167	          setViewReportData(null);
  1168	        }}
  1169	        title="Saved Report"
  1170	      >
  1171	        {!viewReportData ? (
  1172	          <div className="flex justify-center py-10">
  1173	            <Spinner size={10} />
  1174	          </div>
  1175	        ) : (
  1176	          <div className="space-y-3">
  1177	            <p className="font-semibold text-gray-800">{viewReportData.name}</p>
  1178	            <p className="text-xs text-gray-500">
  1179	              {viewReportData.start_date
  1180	                ? toIsoDateInput(viewReportData.start_date)
  1181	                : "—"}{" "}
  1182	              →{" "}
  1183	              {viewReportData.end_date
  1184	                ? toIsoDateInput(viewReportData.end_date)
  1185	                : "—"}
  1186	            </p>
  1187	            <div className="border rounded-xl p-4 bg-gray-50 text-sm text-gray-800 max-h-[60vh] overflow-auto">
  1188	              {(() => {
  1189	                const p = viewReportData.payload;
  1190	                if (!p) return null;
  1191	                return (
  1192	                  <div className="space-y-6">
  1193	                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
  1194	                      <div className="rounded-xl p-3 bg-white border shadow-sm text-blue-800">
  1195	                        <p className="text-xs font-semibold text-gray-500">Revenue</p>
  1196	                        <p className="text-xl font-bold mt-1">{money(p.subscription_revenue)}</p>
  1197	                      </div>
  1198	                      <div className="rounded-xl p-3 bg-white border shadow-sm text-green-800">
  1199	                        <p className="text-xs font-semibold text-gray-500">Users Registered</p>
  1200	                        <p className="text-xl font-bold mt-1">{p.users_registered}</p>
  1201	                      </div>
  1202	                      <div className="rounded-xl p-3 bg-white border shadow-sm text-purple-800">
  1203	                        <p className="text-xs font-semibold text-gray-500">Houses Listed</p>
  1204	                        <p className="text-xl font-bold mt-1">{p.houses_listed}</p>
  1205	                      </div>
  1206	                      <div className="rounded-xl p-3 bg-white border shadow-sm text-yellow-800">
  1207	                        <p className="text-xs font-semibold text-gray-500">Requests Made</p>
  1208	                        <p className="text-xl font-bold mt-1">{p.requests_made}</p>
  1209	                      </div>
  1210	                      <div className="rounded-xl p-3 bg-white border shadow-sm text-gray-800">
  1211	                        <p className="text-xs font-semibold text-gray-500">Active Users</p>
  1212	                        <p className="text-xl font-bold mt-1">{p.active_users}</p>
  1213	                      </div>
  1214	                      <div className="rounded-xl p-3 bg-white border shadow-sm text-gray-800">
  1215	                        <p className="text-xs font-semibold text-gray-500">Total Houses</p>
  1216	                        <p className="text-xl font-bold mt-1">{p.total_houses}</p>
  1217	                      </div>
  1218	                    </div>
  1219	
  1220	                    {p.payment_methods?.length > 0 && (
  1221	                      <div>
  1222	                        <h4 className="font-semibold mb-2">Payment Methods</h4>
  1223	                        <div className="border rounded-lg bg-white overflow-hidden">
  1224	                          {p.payment_methods.map((pm, idx) => (
  1225	                            <div key={idx} className="flex justify-between px-3 py-2 border-b last:border-0">
  1226	                              <span>{pm.payment_method || "—"}</span>
  1227	                              <span className="font-medium">{money(pm.total)}</span>
  1228	                            </div>
  1229	                          ))}
  1230	                        </div>
  1231	                      </div>
  1232	                    )}
  1233	                  </div>
  1234	                );
  1235	              })()}
  1236	            </div>
  1237	            <div className="flex justify-end">
  1238	              <Button
  1239	                variant="outline"
  1240	                onClick={() => {
  1241	                  setViewReportId(null);
  1242	                  setViewReportData(null);
  1243	                }}
  1244	              >
  1245	                Close
  1246	              </Button>
  1247	            </div>
  1248	          </div>
  1249	        )}
  1250	      </Modal>
  1251	
  1252	      {/* Plan modal */}
  1253	      <Modal
  1254	        open={planModalOpen}
  1255	        onClose={() => setPlanModalOpen(false)}
  1256	        title={planEditing ? "Edit Plan" : "Create Plan"}
  1257	      >
  1258	        <div className="space-y-3">
  1259	          <Input
  1260	            label="Name"
  1261	            value={planForm.name}
  1262	            onChange={(e) =>
  1263	              setPlanForm((s) => ({ ...s, name: e.target.value }))
  1264	            }
  1265	          />
  1266	          <Input
  1267	            label="Price (ETB)"
  1268	            type="number"
  1269	            min="0"
  1270	            value={planForm.price}
  1271	            onChange={(e) =>
  1272	              setPlanForm((s) => ({ ...s, price: e.target.value }))
  1273	            }
  1274	          />
  1275	          <Input
  1276	            label="Duration (days)"
  1277	            type="number"
  1278	            min="1"
  1279	            value={planForm.duration_days}
  1280	            onChange={(e) =>
  1281	              setPlanForm((s) => ({ ...s, duration_days: e.target.value }))
  1282	            }
  1283	          />
  1284	          <Select
  1285	            label="Status"
  1286	            value={planForm.is_active ? "active" : "inactive"}
  1287	            onChange={(e) =>
  1288	              setPlanForm((s) => ({
  1289	                ...s,
  1290	                is_active: e.target.value === "active",
  1291	              }))
  1292	            }
  1293	          >
  1294	            <option value="active">Active</option>
  1295	            <option value="inactive">Inactive</option>
  1296	          </Select>
  1297	
  1298	          <div className="flex gap-2 justify-end pt-2">
  1299	            <Button variant="outline" onClick={() => setPlanModalOpen(false)}>
  1300	              Cancel
  1301	            </Button>
  1302	            <Button
  1303	              onClick={onSavePlan}
  1304	              disabled={!planForm.name.trim() || planForm.price === ""}
  1305	            >
  1306	              Save
  1307	            </Button>
  1308	          </div>
  1309	        </div>
  1310	      </Modal>
  1311	
  1312	      {/* Remove listing modal */}
  1313	      <Modal
  1314	        open={removeModal.open}
  1315	        onClose={() => setRemoveModal({ open: false, house: null })}
  1316	        title="Remove Listing"
  1317	      >
  1318	        <div className="space-y-3">
  1319	          <p className="text-sm text-gray-700">
  1320	            Remove:{" "}
  1321	            <span className="font-semibold">{removeModal.house?.title}</span>
  1322	          </p>
  1323	          <Input
  1324	            label="Reason (optional)"
  1325	            placeholder="Reason shown to owner"
  1326	            value={removeReason}
  1327	            onChange={(e) => setRemoveReason(e.target.value)}
  1328	          />
  1329	          <div className="flex gap-2 justify-end">
  1330	            <Button
  1331	              variant="outline"
  1332	              onClick={() => setRemoveModal({ open: false, house: null })}
  1333	            >
  1334	              Cancel
  1335	            </Button>
  1336	            <Button variant="danger" onClick={onRemoveHouse}>
  1337	              Remove
  1338	            </Button>
  1339	          </div>
  1340	        </div>
  1341	      </Modal>
  1342	    </div>
  1343	  );
  1344	}
```

## Line-by-line explanation

- Line 1: import { useEffect, useMemo, useState } from "react";
- Line 2: import { Link } from "react-router-dom";
- Line 3: import {
- Line 4:   approveHouseAdmin,
- Line 5:   createSubscriptionPlan,
- Line 6:   deleteAdminUser,
- Line 7:   deleteSubscriptionPlan,
- Line 8:   getAdminReport,
- Line 9:   getAdminUsers,
- Line 10:   getAllHousesAdmin,
- Line 11:   getPendingHouses,
- Line 12:   getSavedAdminReport,
- Line 13:   listSavedAdminReports,
- Line 14:   listSubscriptionPlans,
- Line 15:   rejectHouseAdmin,
- Line 16:   removeHouseAdmin,
- Line 17:   saveAdminReport,
- Line 18:   suspendAdminUser,
- Line 19:   updateSubscriptionPlan,
- Line 20:   verifyAdminUser,
- Line 21: } from "../services/api";
- Line 22: 
- Line 23: import {
- Line 24:   Alert,
- Line 25:   Badge,
- Line 26:   Button,
- Line 27:   Card,
- Line 28:   Input,
- Line 29:   Modal,
- Line 30:   Pagination,
- Line 31:   Select,
- Line 32:   Spinner,
- Line 33: } from "../components/UI";
- Line 34: 
- Line 35: const SECTIONS = [
- Line 36:   { key: "revenue", label: "Revenue Report" },
- Line 37:   { key: "view_reports", label: "View Reports" },
- Line 38:   { key: "plans", label: "Manage Subscription Plans" },
- Line 39:   { key: "verify_owner", label: "Verify House Owner" },
- Line 40:   { key: "users", label: "Manage Users" },
- Line 41:   { key: "approve_listing", label: "Approve House Listing" },
- Line 42:   { key: "remove_listing", label: "Remove House Listing" },
- Line 43: ];
- Line 44: 
- Line 45: function toIsoDateInput(v) {
- Line 46:   if (!v) return "";
- Line 47:   // Accept either Date, ISO string, or 'YYYY-MM-DD'
- Line 48:   const d = typeof v === "string" ? new Date(v) : v;
- Line 49:   if (Number.isNaN(d.getTime())) return "";
- Line 50:   const yyyy = d.getFullYear();
- Line 51:   const mm = String(d.getMonth() + 1).padStart(2, "0");
- Line 52:   const dd = String(d.getDate()).padStart(2, "0");
- Line 53:   return `${yyyy}-${mm}-${dd}`;
- Line 54: }
- Line 55: import { toStorageUrl } from "../utils/media";
- Line 56: 
- Line 57: function money(v) {
- Line 58:   const n = Number(v || 0);
- Line 59:   return Number.isFinite(n) ? n.toLocaleString() : "0";
- Line 60: }
- Line 61: 
- Line 62: export default function AdminPage() {
- Line 63:   const [section, setSection] = useState("revenue");
- Line 64:   const [loading, setLoading] = useState(false);
- Line 65:   const [error, setError] = useState("");
- Line 66:   const [success, setSuccess] = useState("");
- Line 67: 
- Line 68:   // Revenue report
- Line 69:   const [reportStart, setReportStart] = useState(() =>
- Line 70:     toIsoDateInput(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)),
- Line 71:   );
- Line 72:   const [reportEnd, setReportEnd] = useState(() => toIsoDateInput(new Date()));
- Line 73:   const [report, setReport] = useState(null);
- Line 74:   const [saveReportOpen, setSaveReportOpen] = useState(false);
- Line 75:   const [saveReportName, setSaveReportName] = useState("");
- Line 76: 
- Line 77:   // Saved reports
- Line 78:   const [savedReports, setSavedReports] = useState(null);
- Line 79:   const [savedReportsPage, setSavedReportsPage] = useState(1);
- Line 80:   const [viewReportId, setViewReportId] = useState(null);
- Line 81:   const [viewReportData, setViewReportData] = useState(null);
- Line 82: 
- Line 83:   // Subscription plans
- Line 84:   const [plansRes, setPlansRes] = useState(null);
- Line 85:   const [plansPage, setPlansPage] = useState(1);
- Line 86:   const [planModalOpen, setPlanModalOpen] = useState(false);
- Line 87:   const [planEditing, setPlanEditing] = useState(null);
- Line 88:   const [planForm, setPlanForm] = useState({
- Line 89:     name: "",
- Line 90:     price: "",
- Line 91:     duration_days: 30,
- Line 92:     is_active: true,
- Line 93:   });
- Line 94: 
- Line 95:   // Verify owner
- Line 96:   const [verifyOwnersRes, setVerifyOwnersRes] = useState(null);
- Line 97:   const [verifyOwnersPage, setVerifyOwnersPage] = useState(1);
- Line 98:   const [verifyOwnersQ, setVerifyOwnersQ] = useState("");
- Line 99: 
- Line 100:   // Manage users
- Line 101:   const [usersRes, setUsersRes] = useState(null);
- Line 102:   const [usersPage, setUsersPage] = useState(1);
- Line 103:   const [usersQ, setUsersQ] = useState("");
- Line 104:   const [usersRole, setUsersRole] = useState("");
- Line 105: 
- Line 106:   // Approve listing
- Line 107:   const [pendingRes, setPendingRes] = useState(null);
- Line 108:   const [pendingPage, setPendingPage] = useState(1);
- Line 109: 
- Line 110:   // Remove listing
- Line 111:   const [allHousesRes, setAllHousesRes] = useState(null);
- Line 112:   const [allHousesPage, setAllHousesPage] = useState(1);
- Line 113:   const [removeModal, setRemoveModal] = useState({ open: false, house: null });
- Line 114:   const [removeReason, setRemoveReason] = useState("");
- Line 115: 
- Line 116:   const sidebarItems = useMemo(() => SECTIONS, []);
- Line 117: 
- Line 118:   const flash = (msg) => {
- Line 119:     setSuccess(msg);
- Line 120:     setTimeout(() => setSuccess(""), 2500);
- Line 121:   };
- Line 122: 
- Line 123:   const fail = (e, fallback = "Something went wrong") => {
- Line 124:     setError(e?.response?.data?.message || fallback);
- Line 125:   };
- Line 126: 
- Line 127:   // Load data based on active section
- Line 128:   useEffect(() => {
- Line 129:     (async () => {
- Line 130:       setError("");
- Line 131:       setSuccess("");
- Line 132:       setLoading(true);
- Line 133:       try {
- Line 134:         if (section === "revenue") {
- Line 135:           const { data } = await getAdminReport({
- Line 136:             start_date: reportStart,
- Line 137:             end_date: reportEnd,
- Line 138:           });
- Line 139:           setReport(data);
- Line 140:         }
- Line 141: 
- Line 142:         if (section === "view_reports") {
- Line 143:           const { data } = await listSavedAdminReports({
- Line 144:             page: savedReportsPage,
- Line 145:             per_page: 20,
- Line 146:           });
- Line 147:           setSavedReports(data);
- Line 148:         }
- Line 149: 
- Line 150:         if (section === "plans") {
- Line 151:           const { data } = await listSubscriptionPlans({
- Line 152:             page: plansPage,
- Line 153:             per_page: 20,
- Line 154:           });
- Line 155:           setPlansRes(data);
- Line 156:         }
- Line 157: 
- Line 158:         if (section === "verify_owner") {
- Line 159:           const { data } = await getAdminUsers({
- Line 160:             page: verifyOwnersPage,
- Line 161:             per_page: 20,
- Line 162:             role: "owner",
- Line 163:             verified: false,
- Line 164:             q: verifyOwnersQ || undefined,
- Line 165:           });
- Line 166:           setVerifyOwnersRes(data);
- Line 167:         }
- Line 168: 
- Line 169:         if (section === "users") {
- Line 170:           const { data } = await getAdminUsers({
- Line 171:             page: usersPage,
- Line 172:             per_page: 20,
- Line 173:             role: usersRole || undefined,
- Line 174:             q: usersQ || undefined,
- Line 175:           });
- Line 176:           setUsersRes(data);
- Line 177:         }
- Line 178: 
- Line 179:         if (section === "approve_listing") {
- Line 180:           const { data } = await getPendingHouses({ page: pendingPage });
- Line 181:           setPendingRes(data);
- Line 182:         }
- Line 183: 
- Line 184:         if (section === "remove_listing") {
- Line 185:           const { data } = await getAllHousesAdmin({ page: allHousesPage });
- Line 186:           setAllHousesRes(data);
- Line 187:         }
- Line 188:       } catch (e) {
- Line 189:         fail(e, "Failed to load data");
- Line 190:       } finally {
- Line 191:         setLoading(false);
- Line 192:       }
- Line 193:     })();
- Line 194:   }, [
- Line 195:     section,
- Line 196:     reportStart,
- Line 197:     reportEnd,
- Line 198:     savedReportsPage,
- Line 199:     plansPage,
- Line 200:     verifyOwnersPage,
- Line 201:     verifyOwnersQ,
- Line 202:     usersPage,
- Line 203:     usersQ,
- Line 204:     usersRole,
- Line 205:     pendingPage,
- Line 206:     allHousesPage,
- Line 207:   ]);
- Line 208: 
- Line 209:   // ===== Actions =====
- Line 210:   const onGenerateReport = async () => {
- Line 211:     setLoading(true);
- Line 212:     setError("");
- Line 213:     try {
- Line 214:       const { data } = await getAdminReport({
- Line 215:         start_date: reportStart,
- Line 216:         end_date: reportEnd,
- Line 217:       });
- Line 218:       setReport(data);
- Line 219:       flash("Report generated");
- Line 220:     } catch (e) {
- Line 221:       fail(e, "Failed to generate report");
- Line 222:     } finally {
- Line 223:       setLoading(false);
- Line 224:     }
- Line 225:   };
- Line 226: 
- Line 227:   const onSaveReport = async () => {
- Line 228:     setLoading(true);
- Line 229:     setError("");
- Line 230:     try {
- Line 231:       await saveAdminReport({
- Line 232:         name: saveReportName,
- Line 233:         start_date: reportStart,
- Line 234:         end_date: reportEnd,
- Line 235:       });
- Line 236:       setSaveReportOpen(false);
- Line 237:       setSaveReportName("");
- Line 238:       flash("Report saved");
- Line 239:     } catch (e) {
- Line 240:       fail(e, "Failed to save report");
- Line 241:     } finally {
- Line 242:       setLoading(false);
- Line 243:     }
- Line 244:   };
- Line 245: 
- Line 246:   const onOpenSavedReport = async (id) => {
- Line 247:     setViewReportId(id);
- Line 248:     setViewReportData(null);
- Line 249:     setLoading(true);
- Line 250:     setError("");
- Line 251:     try {
- Line 252:       const { data } = await getSavedAdminReport(id);
- Line 253:       setViewReportData(data);
- Line 254:     } catch (e) {
- Line 255:       fail(e, "Failed to load report");
- Line 256:     } finally {
- Line 257:       setLoading(false);
- Line 258:     }
- Line 259:   };
- Line 260: 
- Line 261:   const onVerifyUser = async (id) => {
- Line 262:     setLoading(true);
- Line 263:     setError("");
- Line 264:     try {
- Line 265:       await verifyAdminUser(id);
- Line 266:       flash("Owner verified");
- Line 267:       // reload current list
- Line 268:       const { data } = await getAdminUsers({
- Line 269:         page: verifyOwnersPage,
- Line 270:         per_page: 20,
- Line 271:         role: "owner",
- Line 272:         verified: false,
- Line 273:         q: verifyOwnersQ || undefined,
- Line 274:       });
- Line 275:       setVerifyOwnersRes(data);
- Line 276:     } catch (e) {
- Line 277:       fail(e, "Failed to verify user");
- Line 278:     } finally {
- Line 279:       setLoading(false);
- Line 280:     }
- Line 281:   };
- Line 282: 
- Line 283:   const onToggleSuspend = async (u) => {
- Line 284:     setLoading(true);
- Line 285:     setError("");
- Line 286:     try {
- Line 287:       await suspendAdminUser(u.id, !u.is_suspended);
- Line 288:       flash(u.is_suspended ? "User unsuspended" : "User suspended");
- Line 289:       const { data } = await getAdminUsers({
- Line 290:         page: usersPage,
- Line 291:         per_page: 20,
- Line 292:         role: usersRole || undefined,
- Line 293:         q: usersQ || undefined,
- Line 294:       });
- Line 295:       setUsersRes(data);
- Line 296:     } catch (e) {
- Line 297:       fail(e, "Failed to update user");
- Line 298:     } finally {
- Line 299:       setLoading(false);
- Line 300:     }
- Line 301:   };
- Line 302: 
- Line 303:   const onDeleteUser = async (u) => {
- Line 304:     if (!confirm(`Delete user ${u.name}?`)) return;
- Line 305:     setLoading(true);
- Line 306:     setError("");
- Line 307:     try {
- Line 308:       await deleteAdminUser(u.id);
- Line 309:       flash("User deleted");
- Line 310:       const { data } = await getAdminUsers({
- Line 311:         page: usersPage,
- Line 312:         per_page: 20,
- Line 313:         role: usersRole || undefined,
- Line 314:         q: usersQ || undefined,
- Line 315:       });
- Line 316:       setUsersRes(data);
- Line 317:     } catch (e) {
- Line 318:       fail(e, "Failed to delete user");
- Line 319:     } finally {
- Line 320:       setLoading(false);
- Line 321:     }
- Line 322:   };
- Line 323: 
- Line 324:   const onApproveHouse = async (id) => {
- Line 325:     setLoading(true);
- Line 326:     setError("");
- Line 327:     try {
- Line 328:       await approveHouseAdmin(id);
- Line 329:       flash("House approved");
- Line 330:       const { data } = await getPendingHouses({ page: pendingPage });
- Line 331:       setPendingRes(data);
- Line 332:     } catch (e) {
- Line 333:       fail(e, "Failed to approve house");
- Line 334:     } finally {
- Line 335:       setLoading(false);
- Line 336:     }
- Line 337:   };
- Line 338: 
- Line 339:   const onRejectHouse = async (id) => {
- Line 340:     if (!confirm("Reject and remove this listing?")) return;
- Line 341:     setLoading(true);
- Line 342:     setError("");
- Line 343:     try {
- Line 344:       await rejectHouseAdmin(id);
- Line 345:       flash("House rejected");
- Line 346:       const { data } = await getPendingHouses({ page: pendingPage });
- Line 347:       setPendingRes(data);
- Line 348:     } catch (e) {
- Line 349:       fail(e, "Failed to reject house");
- Line 350:     } finally {
- Line 351:       setLoading(false);
- Line 352:     }
- Line 353:   };
- Line 354: 
- Line 355:   const onRemoveHouse = async () => {
- Line 356:     const house = removeModal.house;
- Line 357:     if (!house) return;
- Line 358:     setLoading(true);
- Line 359:     setError("");
- Line 360:     try {
- Line 361:       await removeHouseAdmin(house.id, removeReason || undefined);
- Line 362:       setRemoveModal({ open: false, house: null });
- Line 363:       setRemoveReason("");
- Line 364:       flash("Listing removed");
- Line 365:       const { data } = await getAllHousesAdmin({ page: allHousesPage });
- Line 366:       setAllHousesRes(data);
- Line 367:     } catch (e) {
- Line 368:       fail(e, "Failed to remove house");
- Line 369:     } finally {
- Line 370:       setLoading(false);
- Line 371:     }
- Line 372:   };
- Line 373: 
- Line 374:   const openCreatePlan = () => {
- Line 375:     setPlanEditing(null);
- Line 376:     setPlanForm({ name: "", price: "", duration_days: 30, is_active: true });
- Line 377:     setPlanModalOpen(true);
- Line 378:   };
- Line 379: 
- Line 380:   const openEditPlan = (p) => {
- Line 381:     setPlanEditing(p);
- Line 382:     setPlanForm({
- Line 383:       name: p.name || "",
- Line 384:       price: String(p.price ?? ""),
- Line 385:       duration_days: Number(p.duration_days ?? 30),
- Line 386:       is_active: !!p.is_active,
- Line 387:     });
- Line 388:     setPlanModalOpen(true);
- Line 389:   };
- Line 390: 
- Line 391:   const onSavePlan = async () => {
- Line 392:     setLoading(true);
- Line 393:     setError("");
- Line 394:     try {
- Line 395:       const payload = {
- Line 396:         name: planForm.name,
- Line 397:         price: Number(planForm.price),
- Line 398:         duration_days: Number(planForm.duration_days),
- Line 399:         is_active: !!planForm.is_active,
- Line 400:       };
- Line 401:       if (planEditing) {
- Line 402:         await updateSubscriptionPlan(planEditing.id, payload);
- Line 403:         flash("Plan updated");
- Line 404:       } else {
- Line 405:         await createSubscriptionPlan(payload);
- Line 406:         flash("Plan created");
- Line 407:       }
- Line 408:       setPlanModalOpen(false);
- Line 409:       const { data } = await listSubscriptionPlans({
- Line 410:         page: plansPage,
- Line 411:         per_page: 20,
- Line 412:       });
- Line 413:       setPlansRes(data);
- Line 414:     } catch (e) {
- Line 415:       fail(e, "Failed to save plan");
- Line 416:     } finally {
- Line 417:       setLoading(false);
- Line 418:     }
- Line 419:   };
- Line 420: 
- Line 421:   const onDeletePlan = async (p) => {
- Line 422:     if (!confirm(`Delete plan ${p.name}?`)) return;
- Line 423:     setLoading(true);
- Line 424:     setError("");
- Line 425:     try {
- Line 426:       await deleteSubscriptionPlan(p.id);
- Line 427:       flash("Plan deleted");
- Line 428:       const { data } = await listSubscriptionPlans({
- Line 429:         page: plansPage,
- Line 430:         per_page: 20,
- Line 431:       });
- Line 432:       setPlansRes(data);
- Line 433:     } catch (e) {
- Line 434:       fail(e, "Failed to delete plan");
- Line 435:     } finally {
- Line 436:       setLoading(false);
- Line 437:     }
- Line 438:   };
- Line 439: 
- Line 440:   const paymentMethods = report?.payment_methods || [];
- Line 441:   const dailyRevenue = report?.daily_revenue || [];
- Line 442: 
- Line 443: 
- Line 444:   return (
- Line 445:     <div className="max-w-7xl mx-auto px-4 pt-28 pb-10">
- Line 446:       <div className="mb-6">
- Line 447:         <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
- Line 448:         <p className="text-white/70 text-sm">Manage system operations</p>
- Line 449:       </div>
- Line 450: 
- Line 451:       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
- Line 452:         <div className="lg:col-span-3">
- Line 453:           <Card className="p-4">
- Line 454:             <p className="text-xs font-semibold text-gray-500 mb-3">
- Line 455:               ADMIN FUNCTIONS
- Line 456:             </p>
- Line 457:             <div className="space-y-1">
- Line 458:               {sidebarItems.map((it) => (
- Line 459:                 <button
- Line 460:                   key={it.key}
- Line 461:                   onClick={() => setSection(it.key)}
- Line 462:                   className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
- Line 463:                     section === it.key
- Line 464:                       ? "bg-blue-50 text-blue-700"
- Line 465:                       : "text-gray-700 hover:bg-gray-50"
- Line 466:                   }`}
- Line 467:                 >
- Line 468:                   {it.label}
- Line 469:                 </button>
- Line 470:               ))}
- Line 471:             </div>
- Line 472:           </Card>
- Line 473:         </div>
- Line 474: 
- Line 475:         <div className="lg:col-span-9 space-y-4">
- Line 476:           {success && <Alert type="success" message={success} />}
- Line 477:           {error && <Alert type="error" message={error} />}
- Line 478: 
- Line 479:           {loading ? (
- Line 480:             <div className="flex justify-center py-20">
- Line 481:               <Spinner size={12} />
- Line 482:             </div>
- Line 483:           ) : (
- Line 484:             <>
- Line 485:               {/* Revenue Report */}
- Line 486:               {section === "revenue" && (
- Line 487:                 <Card>
- Line 488:                   <div className="flex items-start justify-between gap-4 flex-wrap">
- Line 489:                     <div>
- Line 490:                       <h2 className="text-lg font-semibold text-gray-800">
- Line 491:                         Revenue Report
- Line 492:                       </h2>
- Line 493:                       <p className="text-sm text-gray-500">
- Line 494:                         Generate report by date range
- Line 495:                       </p>
- Line 496:                     </div>
- Line 497:                     <div className="flex gap-2">
- Line 498:                       <Button
- Line 499:                         variant="outline"
- Line 500:                         onClick={() => setSaveReportOpen(true)}
- Line 501:                         disabled={!report}
- Line 502:                       >
- Line 503:                         Save Report
- Line 504:                       </Button>
- Line 505:                       <Button onClick={onGenerateReport}>Generate</Button>
- Line 506:                     </div>
- Line 507:                   </div>
- Line 508: 
- Line 509:                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
- Line 510:                     <Input
- Line 511:                       label="Start Date"
- Line 512:                       type="date"
- Line 513:                       value={reportStart}
- Line 514:                       onChange={(e) => setReportStart(e.target.value)}
- Line 515:                     />
- Line 516:                     <Input
- Line 517:                       label="End Date"
- Line 518:                       type="date"
- Line 519:                       value={reportEnd}
- Line 520:                       onChange={(e) => setReportEnd(e.target.value)}
- Line 521:                     />
- Line 522:                   </div>
- Line 523: 
- Line 524:                   {!report ? (
- Line 525:                     <p className="text-sm text-gray-400 mt-4">
- Line 526:                       No report loaded.
- Line 527:                     </p>
- Line 528:                   ) : (
- Line 529:                     <>
- Line 530:                       <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
- Line 531:                         <div className="rounded-2xl p-4 bg-blue-50 text-blue-800">
- Line 532:                           <p className="text-xs font-semibold">Revenue (ETB)</p>
- Line 533:                           <p className="text-2xl font-bold mt-1">
- Line 534:                             {money(report.subscription_revenue)}
- Line 535:                           </p>
- Line 536:                         </div>
- Line 537:                         <div className="rounded-2xl p-4 bg-green-50 text-green-800">
- Line 538:                           <p className="text-xs font-semibold">
- Line 539:                             Users Registered
- Line 540:                           </p>
- Line 541:                           <p className="text-2xl font-bold mt-1">
- Line 542:                             {report.users_registered}
- Line 543:                           </p>
- Line 544:                         </div>
- Line 545:                         <div className="rounded-2xl p-4 bg-purple-50 text-purple-800">
- Line 546:                           <p className="text-xs font-semibold">Houses Listed</p>
- Line 547:                           <p className="text-2xl font-bold mt-1">
- Line 548:                             {report.houses_listed}
- Line 549:                           </p>
- Line 550:                         </div>
- Line 551:                         <div className="rounded-2xl p-4 bg-yellow-50 text-yellow-800">
- Line 552:                           <p className="text-xs font-semibold">Requests Made</p>
- Line 553:                           <p className="text-2xl font-bold mt-1">
- Line 554:                             {report.requests_made}
- Line 555:                           </p>
- Line 556:                         </div>
- Line 557:                         <div className="rounded-2xl p-4 bg-gray-50 text-gray-800">
- Line 558:                           <p className="text-xs font-semibold">Active Users</p>
- Line 559:                           <p className="text-2xl font-bold mt-1">
- Line 560:                             {report.active_users}
- Line 561:                           </p>
- Line 562:                         </div>
- Line 563:                         <div className="rounded-2xl p-4 bg-gray-50 text-gray-800">
- Line 564:                           <p className="text-xs font-semibold">Total Houses</p>
- Line 565:                           <p className="text-2xl font-bold mt-1">
- Line 566:                             {report.total_houses}
- Line 567:                           </p>
- Line 568:                         </div>
- Line 569:                       </div>
- Line 570: 
- Line 571:                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
- Line 572:                         <div>
- Line 573:                           <h3 className="font-semibold text-gray-700 mb-2">
- Line 574:                             Payment Methods
- Line 575:                           </h3>
- Line 576:                           <div className="border rounded-xl overflow-hidden">
- Line 577:                             <table className="w-full text-sm">
- Line 578:                               <thead className="bg-gray-50 text-gray-600">
- Line 579:                                 <tr>
- Line 580:                                   <th className="text-left px-3 py-2">
- Line 581:                                     Method
- Line 582:                                   </th>
- Line 583:                                   <th className="text-right px-3 py-2">
- Line 584:                                     Total (ETB)
- Line 585:                                   </th>
- Line 586:                                 </tr>
- Line 587:                               </thead>
- Line 588:                               <tbody>
- Line 589:                                 {paymentMethods.length === 0 ? (
- Line 590:                                   <tr>
- Line 591:                                     <td
- Line 592:                                       className="px-3 py-3 text-gray-400"
- Line 593:                                       colSpan={2}
- Line 594:                                     >
- Line 595:                                       No payments in range
- Line 596:                                     </td>
- Line 597:                                   </tr>
- Line 598:                                 ) : (
- Line 599:                                   paymentMethods.map((p, idx) => (
- Line 600:                                     <tr key={idx} className="border-t">
- Line 601:                                       <td className="px-3 py-2 text-gray-700">
- Line 602:                                         {p.payment_method || "—"}
- Line 603:                                       </td>
- Line 604:                                       <td className="px-3 py-2 text-right text-gray-700">
- Line 605:                                         {money(p.total)}
- Line 606:                                       </td>
- Line 607:                                     </tr>
- Line 608:                                   ))
- Line 609:                                 )}
- Line 610:                               </tbody>
- Line 611:                             </table>
- Line 612:                           </div>
- Line 613:                         </div>
- Line 614: 
- Line 615:                         <div>
- Line 616:                           <h3 className="font-semibold text-gray-700 mb-2">
- Line 617:                             Daily Revenue
- Line 618:                           </h3>
- Line 619:                           <div className="border rounded-xl overflow-hidden">
- Line 620:                             <table className="w-full text-sm">
- Line 621:                               <thead className="bg-gray-50 text-gray-600">
- Line 622:                                 <tr>
- Line 623:                                   <th className="text-left px-3 py-2">Date</th>
- Line 624:                                   <th className="text-right px-3 py-2">
- Line 625:                                     Total (ETB)
- Line 626:                                   </th>
- Line 627:                                 </tr>
- Line 628:                               </thead>
- Line 629:                               <tbody>
- Line 630:                                 {dailyRevenue.length === 0 ? (
- Line 631:                                   <tr>
- Line 632:                                     <td
- Line 633:                                       className="px-3 py-3 text-gray-400"
- Line 634:                                       colSpan={2}
- Line 635:                                     >
- Line 636:                                       No payments in range
- Line 637:                                     </td>
- Line 638:                                   </tr>
- Line 639:                                 ) : (
- Line 640:                                   dailyRevenue.map((d, idx) => (
- Line 641:                                     <tr key={idx} className="border-t">
- Line 642:                                       <td className="px-3 py-2 text-gray-700">
- Line 643:                                         {d.date}
- Line 644:                                       </td>
- Line 645:                                       <td className="px-3 py-2 text-right text-gray-700">
- Line 646:                                         {money(d.total)}
- Line 647:                                       </td>
- Line 648:                                     </tr>
- Line 649:                                   ))
- Line 650:                                 )}
- Line 651:                               </tbody>
- Line 652:                             </table>
- Line 653:                           </div>
- Line 654:                         </div>
- Line 655:                       </div>
- Line 656:                     </>
- Line 657:                   )}
- Line 658:                 </Card>
- Line 659:               )}
- Line 660: 
- Line 661:               {/* View Reports */}
- Line 662:               {section === "view_reports" && (
- Line 663:                 <Card>
- Line 664:                   <div className="flex items-start justify-between gap-4 flex-wrap">
- Line 665:                     <div>
- Line 666:                       <h2 className="text-lg font-semibold text-gray-800">
- Line 667:                         Saved Reports
- Line 668:                       </h2>
- Line 669:                       <p className="text-sm text-gray-500">
- Line 670:                         View previously generated reports
- Line 671:                       </p>
- Line 672:                     </div>
- Line 673:                     <Button
- Line 674:                       variant="outline"
- Line 675:                       onClick={() => setSection("revenue")}
- Line 676:                     >
- Line 677:                       Generate New
- Line 678:                     </Button>
- Line 679:                   </div>
- Line 680: 
- Line 681:                   <div className="mt-4 space-y-3">
- Line 682:                     {(savedReports?.data || []).length === 0 ? (
- Line 683:                       <p className="text-sm text-gray-400">No saved reports.</p>
- Line 684:                     ) : (
- Line 685:                       (savedReports?.data || []).map((r) => (
- Line 686:                         <div
- Line 687:                           key={r.id}
- Line 688:                           className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
- Line 689:                         >
- Line 690:                           <div>
- Line 691:                             <p className="font-medium text-gray-800">
- Line 692:                               {r.name}
- Line 693:                             </p>
- Line 694:                             <p className="text-xs text-gray-500">
- Line 695:                               {r.start_date
- Line 696:                                 ? toIsoDateInput(r.start_date)
- Line 697:                                 : "—"}{" "}
- Line 698:                               → {r.end_date ? toIsoDateInput(r.end_date) : "—"}
- Line 699:                               {r.user?.name ? ` · by ${r.user.name}` : ""}
- Line 700:                             </p>
- Line 701:                           </div>
- Line 702:                           <Button
- Line 703:                             variant="outline"
- Line 704:                             onClick={() => onOpenSavedReport(r.id)}
- Line 705:                           >
- Line 706:                             View
- Line 707:                           </Button>
- Line 708:                         </div>
- Line 709:                       ))
- Line 710:                     )}
- Line 711:                   </div>
- Line 712: 
- Line 713:                   <Pagination
- Line 714:                     meta={savedReports}
- Line 715:                     onPage={setSavedReportsPage}
- Line 716:                   />
- Line 717:                 </Card>
- Line 718:               )}
- Line 719: 
- Line 720:               {/* Manage Subscription Plans */}
- Line 721:               {section === "plans" && (
- Line 722:                 <Card>
- Line 723:                   <div className="flex items-start justify-between gap-4 flex-wrap">
- Line 724:                     <div>
- Line 725:                       <h2 className="text-lg font-semibold text-gray-800">
- Line 726:                         Subscription Plans
- Line 727:                       </h2>
- Line 728:                       <p className="text-sm text-gray-500">
- Line 729:                         Create, edit, and remove plans
- Line 730:                       </p>
- Line 731:                     </div>
- Line 732:                     <Button onClick={openCreatePlan}>Add Plan</Button>
- Line 733:                   </div>
- Line 734: 
- Line 735:                   <div className="mt-4 space-y-3">
- Line 736:                     {(plansRes?.data || []).length === 0 ? (
- Line 737:                       <p className="text-sm text-gray-400">No plans created.</p>
- Line 738:                     ) : (
- Line 739:                       (plansRes?.data || []).map((p) => (
- Line 740:                         <div
- Line 741:                           key={p.id}
- Line 742:                           className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
- Line 743:                         >
- Line 744:                           <div>
- Line 745:                             <p className="font-medium text-gray-800">
- Line 746:                               {p.name}
- Line 747:                             </p>
- Line 748:                             <p className="text-sm text-gray-500">
- Line 749:                               ETB {money(p.price)} · {p.duration_days} days
- Line 750:                             </p>
- Line 751:                             <div className="mt-1">
- Line 752:                               <Badge
- Line 753:                                 label={p.is_active ? "Active" : "Inactive"}
- Line 754:                                 color={p.is_active ? "green" : "gray"}
- Line 755:                               />
- Line 756:                             </div>
- Line 757:                           </div>
- Line 758:                           <div className="flex gap-2">
- Line 759:                             <Button
- Line 760:                               variant="outline"
- Line 761:                               onClick={() => openEditPlan(p)}
- Line 762:                             >
- Line 763:                               Edit
- Line 764:                             </Button>
- Line 765:                             <Button
- Line 766:                               variant="danger"
- Line 767:                               onClick={() => onDeletePlan(p)}
- Line 768:                             >
- Line 769:                               Delete
- Line 770:                             </Button>
- Line 771:                           </div>
- Line 772:                         </div>
- Line 773:                       ))
- Line 774:                     )}
- Line 775:                   </div>
- Line 776: 
- Line 777:                   <Pagination meta={plansRes} onPage={setPlansPage} />
- Line 778:                 </Card>
- Line 779:               )}
- Line 780: 
- Line 781:               {/* Verify House Owner */}
- Line 782:               {section === "verify_owner" && (
- Line 783:                 <Card>
- Line 784:                   <div className="flex items-start justify-between gap-4 flex-wrap">
- Line 785:                     <div>
- Line 786:                       <h2 className="text-lg font-semibold text-gray-800">
- Line 787:                         Verify House Owners
- Line 788:                       </h2>
- Line 789:                       <p className="text-sm text-gray-500">
- Line 790:                         Approve owner accounts for posting listings
- Line 791:                       </p>
- Line 792:                     </div>
- Line 793:                   </div>
- Line 794: 
- Line 795:                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
- Line 796:                     <Input
- Line 797:                       label="Search"
- Line 798:                       placeholder="Name or email"
- Line 799:                       value={verifyOwnersQ}
- Line 800:                       onChange={(e) => {
- Line 801:                         setVerifyOwnersPage(1);
- Line 802:                         setVerifyOwnersQ(e.target.value);
- Line 803:                       }}
- Line 804:                     />
- Line 805:                   </div>
- Line 806: 
- Line 807:                   <div className="mt-4 space-y-3">
- Line 808:                     {(verifyOwnersRes?.data || []).length === 0 ? (
- Line 809:                       <p className="text-sm text-gray-400">
- Line 810:                         No unverified owners.
- Line 811:                       </p>
- Line 812:                     ) : (
- Line 813:                       (verifyOwnersRes?.data || []).map((u) => (
- Line 814:                         <div
- Line 815:                           key={u.id}
- Line 816:                           className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
- Line 817:                         >
- Line 818:                           <div>
- Line 819:                             <p className="font-medium text-gray-800">
- Line 820:                               {u.name}
- Line 821:                             </p>
- Line 822:                             <p className="text-sm text-gray-500">
- Line 823:                               {u.email} · {u.phone || "No phone"}
- Line 824:                             </p>
- Line 825:                             <div className="flex gap-2 mt-1 flex-wrap">
- Line 826:                               <Badge label="owner" color="blue" />
- Line 827:                               <Badge
- Line 828:                                 label={
- Line 829:                                   u.is_verified ? "Verified" : "Unverified"
- Line 830:                                 }
- Line 831:                                 color={u.is_verified ? "green" : "yellow"}
- Line 832:                               />
- Line 833:                               <Badge
- Line 834:                                 label={`Houses: ${u.houses_count ?? 0}`}
- Line 835:                                 color="gray"
- Line 836:                               />
- Line 837:                             </div>
- Line 838:                           </div>
- Line 839:                           <Button
- Line 840:                             variant="success"
- Line 841:                             onClick={() => onVerifyUser(u.id)}
- Line 842:                           >
- Line 843:                             Verify
- Line 844:                           </Button>
- Line 845:                         </div>
- Line 846:                       ))
- Line 847:                     )}
- Line 848:                   </div>
- Line 849: 
- Line 850:                   <Pagination
- Line 851:                     meta={verifyOwnersRes}
- Line 852:                     onPage={setVerifyOwnersPage}
- Line 853:                   />
- Line 854:                 </Card>
- Line 855:               )}
- Line 856: 
- Line 857:               {/* Manage Users */}
- Line 858:               {section === "users" && (
- Line 859:                 <Card>
- Line 860:                   <div className="flex items-start justify-between gap-4 flex-wrap">
- Line 861:                     <div>
- Line 862:                       <h2 className="text-lg font-semibold text-gray-800">
- Line 863:                         Manage Users
- Line 864:                       </h2>
- Line 865:                       <p className="text-sm text-gray-500">
- Line 866:                         Search, suspend, or delete users
- Line 867:                       </p>
- Line 868:                     </div>
- Line 869:                   </div>
- Line 870: 
- Line 871:                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
- Line 872:                     <Input
- Line 873:                       label="Search"
- Line 874:                       placeholder="Name or email"
- Line 875:                       value={usersQ}
- Line 876:                       onChange={(e) => {
- Line 877:                         setUsersPage(1);
- Line 878:                         setUsersQ(e.target.value);
- Line 879:                       }}
- Line 880:                     />
- Line 881:                     <Select
- Line 882:                       label="Role"
- Line 883:                       value={usersRole}
- Line 884:                       onChange={(e) => {
- Line 885:                         setUsersPage(1);
- Line 886:                         setUsersRole(e.target.value);
- Line 887:                       }}
- Line 888:                     >
- Line 889:                       <option value="">All</option>
- Line 890:                       <option value="owner">Owner</option>
- Line 891:                       <option value="renter">Renter</option>
- Line 892:                       <option value="admin">Admin</option>
- Line 893:                     </Select>
- Line 894:                   </div>
- Line 895: 
- Line 896:                   <div className="mt-4 space-y-3">
- Line 897:                     {(usersRes?.data || []).length === 0 ? (
- Line 898:                       <p className="text-sm text-gray-400">No users found.</p>
- Line 899:                     ) : (
- Line 900:                       (usersRes?.data || []).map((u) => (
- Line 901:                         <div
- Line 902:                           key={u.id}
- Line 903:                           className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4"
- Line 904:                         >
- Line 905:                           <div>
- Line 906:                             <p className="font-medium text-gray-800">
- Line 907:                               {u.name}
- Line 908:                             </p>
- Line 909:                             <p className="text-sm text-gray-500">
- Line 910:                               {u.email} · {u.phone || "No phone"}
- Line 911:                             </p>
- Line 912:                             <div className="flex gap-2 mt-1 flex-wrap">
- Line 913:                               <Badge
- Line 914:                                 label={u.role}
- Line 915:                                 color={
- Line 916:                                   u.role === "admin"
- Line 917:                                     ? "gray"
- Line 918:                                     : u.role === "owner"
- Line 919:                                       ? "blue"
- Line 920:                                       : "green"
- Line 921:                                 }
- Line 922:                               />
- Line 923:                               <Badge
- Line 924:                                 label={
- Line 925:                                   u.is_verified ? "Verified" : "Unverified"
- Line 926:                                 }
- Line 927:                                 color={u.is_verified ? "green" : "yellow"}
- Line 928:                               />
- Line 929:                               {u.is_suspended && (
- Line 930:                                 <Badge label="Suspended" color="red" />
- Line 931:                               )}
- Line 932:                               <Badge
- Line 933:                                 label={`Houses: ${u.houses_count ?? 0}`}
- Line 934:                                 color="gray"
- Line 935:                               />
- Line 936:                             </div>
- Line 937:                           </div>
- Line 938:                           <div className="flex gap-2 flex-wrap justify-end">
- Line 939:                             {u.role !== "admin" && (
- Line 940:                               <Button
- Line 941:                                 variant="outline"
- Line 942:                                 onClick={() => onToggleSuspend(u)}
- Line 943:                               >
- Line 944:                                 {u.is_suspended ? "Unsuspend" : "Suspend"}
- Line 945:                               </Button>
- Line 946:                             )}
- Line 947:                             {u.role !== "admin" && (
- Line 948:                               <Button
- Line 949:                                 variant="danger"
- Line 950:                                 onClick={() => onDeleteUser(u)}
- Line 951:                               >
- Line 952:                                 Delete
- Line 953:                               </Button>
- Line 954:                             )}
- Line 955:                           </div>
- Line 956:                         </div>
- Line 957:                       ))
- Line 958:                     )}
- Line 959:                   </div>
- Line 960: 
- Line 961:                   <Pagination meta={usersRes} onPage={setUsersPage} />
- Line 962:                 </Card>
- Line 963:               )}
- Line 964: 
- Line 965:               {/* Approve House Listing */}
- Line 966:               {section === "approve_listing" && (
- Line 967:                 <Card>
- Line 968:                   <div>
- Line 969:                     <h2 className="text-lg font-semibold text-gray-800">
- Line 970:                       Pending House Listings
- Line 971:                     </h2>
- Line 972:                     <p className="text-sm text-gray-500">
- Line 973:                       Approve or reject new listings
- Line 974:                     </p>
- Line 975:                   </div>
- Line 976: 
- Line 977:                   <div className="mt-4 space-y-3">
- Line 978:                     {(pendingRes?.data || []).length === 0 ? (
- Line 979:                       <div className="text-center py-12 text-gray-400">
- Line 980:                         <div className="text-5xl mb-3">🎉</div>
- Line 981:                         <p>No pending listings.</p>
- Line 982:                       </div>
- Line 983:                     ) : (
- Line 984:                       (pendingRes?.data || []).map((h) => {
- Line 985:                         const img = toStorageUrl(h.images?.[0]?.image_path);
- Line 986:                         return (
- Line 987:                           <div
- Line 988:                             key={h.id}
- Line 989:                             className="border border-gray-100 rounded-2xl p-4 flex items-start justify-between gap-4"
- Line 990:                           >
- Line 991:                             <div className="flex gap-4">
- Line 992:                               <Link to={`/houses/${h.id}`} target="_blank" className="w-20 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 block hover:opacity-80 transition-opacity">
- Line 993:                                 {img ? (
- Line 994:                                   <img
- Line 995:                                     src={img}
- Line 996:                                     alt=""
- Line 997:                                     className="w-full h-full object-cover"
- Line 998:                                   />
- Line 999:                                 ) : (
- Line 1000:                                   <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">
- Line 1001:                                     🏠
- Line 1002:                                   </div>
- Line 1003:                                 )}
- Line 1004:                               </Link>
- Line 1005:                               <div>
- Line 1006:                                 <Link to={`/houses/${h.id}`} target="_blank" className="font-medium text-blue-400 hover:underline">
- Line 1007:                                   {h.title}
- Line 1008:                                 </Link>
- Line 1009:                                 <p className="text-sm text-gray-500">
- Line 1010:                                   📍 {h.location} · ETB {money(h.price)}/mo · 🛏{" "}
- Line 1011:                                   {h.rooms} rooms
- Line 1012:                                 </p>
- Line 1013:                                 <p className="text-xs text-gray-400 mt-1">
- Line 1014:                                   Owner: {h.owner?.name}
- Line 1015:                                 </p>
- Line 1016:                               </div>
- Line 1017:                             </div>
- Line 1018:                             <div className="flex gap-2 flex-shrink-0">
- Line 1019:                               <Link
- Line 1020:                                 to={`/houses/${h.id}`}
- Line 1021:                                 target="_blank"
- Line 1022:                                 className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all border border-gray-300 text-gray-700 hover:bg-gray-50"
- Line 1023:                               >
- Line 1024:                                 View
- Line 1025:                               </Link>
- Line 1026:                               <Button
- Line 1027:                                 variant="success"
- Line 1028:                                 onClick={() => onApproveHouse(h.id)}
- Line 1029:                               >
- Line 1030:                                 Approve
- Line 1031:                               </Button>
- Line 1032:                               <Button
- Line 1033:                                 variant="danger"
- Line 1034:                                 onClick={() => onRejectHouse(h.id)}
- Line 1035:                               >
- Line 1036:                                 Reject
- Line 1037:                               </Button>
- Line 1038:                             </div>
- Line 1039:                           </div>
- Line 1040:                         );
- Line 1041:                       })
- Line 1042:                     )}
- Line 1043:                   </div>
- Line 1044: 
- Line 1045:                   <Pagination meta={pendingRes} onPage={setPendingPage} />
- Line 1046:                 </Card>
- Line 1047:               )}
- Line 1048: 
- Line 1049:               {/* Remove House Listing */}
- Line 1050:               {section === "remove_listing" && (
- Line 1051:                 <Card>
- Line 1052:                   <div>
- Line 1053:                     <h2 className="text-lg font-semibold text-gray-800">
- Line 1054:                       Remove House Listing
- Line 1055:                     </h2>
- Line 1056:                     <p className="text-sm text-gray-500">
- Line 1057:                       Remove listings that violate policies
- Line 1058:                     </p>
- Line 1059:                   </div>
- Line 1060: 
- Line 1061:                   <div className="mt-4 space-y-3">
- Line 1062:                     {(allHousesRes?.data || []).length === 0 ? (
- Line 1063:                       <p className="text-sm text-gray-400">No houses found.</p>
- Line 1064:                     ) : (
- Line 1065:                       (allHousesRes?.data || []).map((h) => {
- Line 1066:                         const img = toStorageUrl(h.images?.[0]?.image_path);
- Line 1067:                         return (
- Line 1068:                           <div
- Line 1069:                             key={h.id}
- Line 1070:                             className="border border-gray-100 rounded-2xl p-4 flex items-start justify-between gap-4"
- Line 1071:                           >
- Line 1072:                             <div className="flex gap-4">
- Line 1073:                               <div className="w-20 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
- Line 1074:                                 {img ? (
- Line 1075:                                   <img
- Line 1076:                                     src={img}
- Line 1077:                                     alt=""
- Line 1078:                                     className="w-full h-full object-cover"
- Line 1079:                                   />
- Line 1080:                                 ) : (
- Line 1081:                                   <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">
- Line 1082:                                     🏠
- Line 1083:                                   </div>
- Line 1084:                                 )}
- Line 1085:                               </div>
- Line 1086:                               <div>
- Line 1087:                                 <p className="font-medium text-gray-800">
- Line 1088:                                   {h.title}
- Line 1089:                                 </p>
- Line 1090:                                 <p className="text-sm text-gray-500">
- Line 1091:                                   📍 {h.location} · ETB {money(h.price)}/mo
- Line 1092:                                 </p>
- Line 1093:                                 <div className="flex gap-2 mt-1 flex-wrap">
- Line 1094:                                   <Badge
- Line 1095:                                     label={h.status}
- Line 1096:                                     color={
- Line 1097:                                       h.status === "available" ? "green" : "red"
- Line 1098:                                     }
- Line 1099:                                   />
- Line 1100:                                   <Badge
- Line 1101:                                     label={
- Line 1102:                                       h.is_approved ? "Approved" : "Pending"
- Line 1103:                                     }
- Line 1104:                                     color={h.is_approved ? "blue" : "yellow"}
- Line 1105:                                   />
- Line 1106:                                   {h.owner?.name && (
- Line 1107:                                     <Badge
- Line 1108:                                       label={`Owner: ${h.owner.name}`}
- Line 1109:                                       color="gray"
- Line 1110:                                     />
- Line 1111:                                   )}
- Line 1112:                                 </div>
- Line 1113:                               </div>
- Line 1114:                             </div>
- Line 1115:                             <Button
- Line 1116:                               variant="danger"
- Line 1117:                               onClick={() => {
- Line 1118:                                 setRemoveModal({ open: true, house: h });
- Line 1119:                                 setRemoveReason("");
- Line 1120:                               }}
- Line 1121:                             >
- Line 1122:                               Remove
- Line 1123:                             </Button>
- Line 1124:                           </div>
- Line 1125:                         );
- Line 1126:                       })
- Line 1127:                     )}
- Line 1128:                   </div>
- Line 1129: 
- Line 1130:                   <Pagination meta={allHousesRes} onPage={setAllHousesPage} />
- Line 1131:                 </Card>
- Line 1132:               )}
- Line 1133:             </>
- Line 1134:           )}
- Line 1135:         </div>
- Line 1136:       </div>
- Line 1137: 
- Line 1138:       {/* Save report modal */}
- Line 1139:       <Modal
- Line 1140:         open={saveReportOpen}
- Line 1141:         onClose={() => setSaveReportOpen(false)}
- Line 1142:         title="Save Report"
- Line 1143:       >
- Line 1144:         <div className="space-y-4">
- Line 1145:           <Input
- Line 1146:             label="Report Name"
- Line 1147:             placeholder="e.g. April Revenue"
- Line 1148:             value={saveReportName}
- Line 1149:             onChange={(e) => setSaveReportName(e.target.value)}
- Line 1150:           />
- Line 1151:           <div className="flex gap-2 justify-end">
- Line 1152:             <Button variant="outline" onClick={() => setSaveReportOpen(false)}>
- Line 1153:               Cancel
- Line 1154:             </Button>
- Line 1155:             <Button onClick={onSaveReport} disabled={!saveReportName.trim()}>
- Line 1156:               Save
- Line 1157:             </Button>
- Line 1158:           </div>
- Line 1159:         </div>
- Line 1160:       </Modal>
- Line 1161: 
- Line 1162:       {/* View report modal */}
- Line 1163:       <Modal
- Line 1164:         open={!!viewReportId}
- Line 1165:         onClose={() => {
- Line 1166:           setViewReportId(null);
- Line 1167:           setViewReportData(null);
- Line 1168:         }}
- Line 1169:         title="Saved Report"
- Line 1170:       >
- Line 1171:         {!viewReportData ? (
- Line 1172:           <div className="flex justify-center py-10">
- Line 1173:             <Spinner size={10} />
- Line 1174:           </div>
- Line 1175:         ) : (
- Line 1176:           <div className="space-y-3">
- Line 1177:             <p className="font-semibold text-gray-800">{viewReportData.name}</p>
- Line 1178:             <p className="text-xs text-gray-500">
- Line 1179:               {viewReportData.start_date
- Line 1180:                 ? toIsoDateInput(viewReportData.start_date)
- Line 1181:                 : "—"}{" "}
- Line 1182:               →{" "}
- Line 1183:               {viewReportData.end_date
- Line 1184:                 ? toIsoDateInput(viewReportData.end_date)
- Line 1185:                 : "—"}
- Line 1186:             </p>
- Line 1187:             <div className="border rounded-xl p-4 bg-gray-50 text-sm text-gray-800 max-h-[60vh] overflow-auto">
- Line 1188:               {(() => {
- Line 1189:                 const p = viewReportData.payload;
- Line 1190:                 if (!p) return null;
- Line 1191:                 return (
- Line 1192:                   <div className="space-y-6">
- Line 1193:                     <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
- Line 1194:                       <div className="rounded-xl p-3 bg-white border shadow-sm text-blue-800">
- Line 1195:                         <p className="text-xs font-semibold text-gray-500">Revenue</p>
- Line 1196:                         <p className="text-xl font-bold mt-1">{money(p.subscription_revenue)}</p>
- Line 1197:                       </div>
- Line 1198:                       <div className="rounded-xl p-3 bg-white border shadow-sm text-green-800">
- Line 1199:                         <p className="text-xs font-semibold text-gray-500">Users Registered</p>
- Line 1200:                         <p className="text-xl font-bold mt-1">{p.users_registered}</p>
- Line 1201:                       </div>
- Line 1202:                       <div className="rounded-xl p-3 bg-white border shadow-sm text-purple-800">
- Line 1203:                         <p className="text-xs font-semibold text-gray-500">Houses Listed</p>
- Line 1204:                         <p className="text-xl font-bold mt-1">{p.houses_listed}</p>
- Line 1205:                       </div>
- Line 1206:                       <div className="rounded-xl p-3 bg-white border shadow-sm text-yellow-800">
- Line 1207:                         <p className="text-xs font-semibold text-gray-500">Requests Made</p>
- Line 1208:                         <p className="text-xl font-bold mt-1">{p.requests_made}</p>
- Line 1209:                       </div>
- Line 1210:                       <div className="rounded-xl p-3 bg-white border shadow-sm text-gray-800">
- Line 1211:                         <p className="text-xs font-semibold text-gray-500">Active Users</p>
- Line 1212:                         <p className="text-xl font-bold mt-1">{p.active_users}</p>
- Line 1213:                       </div>
- Line 1214:                       <div className="rounded-xl p-3 bg-white border shadow-sm text-gray-800">
- Line 1215:                         <p className="text-xs font-semibold text-gray-500">Total Houses</p>
- Line 1216:                         <p className="text-xl font-bold mt-1">{p.total_houses}</p>
- Line 1217:                       </div>
- Line 1218:                     </div>
- Line 1219: 
- Line 1220:                     {p.payment_methods?.length > 0 && (
- Line 1221:                       <div>
- Line 1222:                         <h4 className="font-semibold mb-2">Payment Methods</h4>
- Line 1223:                         <div className="border rounded-lg bg-white overflow-hidden">
- Line 1224:                           {p.payment_methods.map((pm, idx) => (
- Line 1225:                             <div key={idx} className="flex justify-between px-3 py-2 border-b last:border-0">
- Line 1226:                               <span>{pm.payment_method || "—"}</span>
- Line 1227:                               <span className="font-medium">{money(pm.total)}</span>
- Line 1228:                             </div>
- Line 1229:                           ))}
- Line 1230:                         </div>
- Line 1231:                       </div>
- Line 1232:                     )}
- Line 1233:                   </div>
- Line 1234:                 );
- Line 1235:               })()}
- Line 1236:             </div>
- Line 1237:             <div className="flex justify-end">
- Line 1238:               <Button
- Line 1239:                 variant="outline"
- Line 1240:                 onClick={() => {
- Line 1241:                   setViewReportId(null);
- Line 1242:                   setViewReportData(null);
- Line 1243:                 }}
- Line 1244:               >
- Line 1245:                 Close
- Line 1246:               </Button>
- Line 1247:             </div>
- Line 1248:           </div>
- Line 1249:         )}
- Line 1250:       </Modal>
- Line 1251: 
- Line 1252:       {/* Plan modal */}
- Line 1253:       <Modal
- Line 1254:         open={planModalOpen}
- Line 1255:         onClose={() => setPlanModalOpen(false)}
- Line 1256:         title={planEditing ? "Edit Plan" : "Create Plan"}
- Line 1257:       >
- Line 1258:         <div className="space-y-3">
- Line 1259:           <Input
- Line 1260:             label="Name"
- Line 1261:             value={planForm.name}
- Line 1262:             onChange={(e) =>
- Line 1263:               setPlanForm((s) => ({ ...s, name: e.target.value }))
- Line 1264:             }
- Line 1265:           />
- Line 1266:           <Input
- Line 1267:             label="Price (ETB)"
- Line 1268:             type="number"
- Line 1269:             min="0"
- Line 1270:             value={planForm.price}
- Line 1271:             onChange={(e) =>
- Line 1272:               setPlanForm((s) => ({ ...s, price: e.target.value }))
- Line 1273:             }
- Line 1274:           />
- Line 1275:           <Input
- Line 1276:             label="Duration (days)"
- Line 1277:             type="number"
- Line 1278:             min="1"
- Line 1279:             value={planForm.duration_days}
- Line 1280:             onChange={(e) =>
- Line 1281:               setPlanForm((s) => ({ ...s, duration_days: e.target.value }))
- Line 1282:             }
- Line 1283:           />
- Line 1284:           <Select
- Line 1285:             label="Status"
- Line 1286:             value={planForm.is_active ? "active" : "inactive"}
- Line 1287:             onChange={(e) =>
- Line 1288:               setPlanForm((s) => ({
- Line 1289:                 ...s,
- Line 1290:                 is_active: e.target.value === "active",
- Line 1291:               }))
- Line 1292:             }
- Line 1293:           >
- Line 1294:             <option value="active">Active</option>
- Line 1295:             <option value="inactive">Inactive</option>
- Line 1296:           </Select>
- Line 1297: 
- Line 1298:           <div className="flex gap-2 justify-end pt-2">
- Line 1299:             <Button variant="outline" onClick={() => setPlanModalOpen(false)}>
- Line 1300:               Cancel
- Line 1301:             </Button>
- Line 1302:             <Button
- Line 1303:               onClick={onSavePlan}
- Line 1304:               disabled={!planForm.name.trim() || planForm.price === ""}
- Line 1305:             >
- Line 1306:               Save
- Line 1307:             </Button>
- Line 1308:           </div>
- Line 1309:         </div>
- Line 1310:       </Modal>
- Line 1311: 
- Line 1312:       {/* Remove listing modal */}
- Line 1313:       <Modal
- Line 1314:         open={removeModal.open}
- Line 1315:         onClose={() => setRemoveModal({ open: false, house: null })}
- Line 1316:         title="Remove Listing"
- Line 1317:       >
- Line 1318:         <div className="space-y-3">
- Line 1319:           <p className="text-sm text-gray-700">
- Line 1320:             Remove:{" "}
- Line 1321:             <span className="font-semibold">{removeModal.house?.title}</span>
- Line 1322:           </p>
- Line 1323:           <Input
- Line 1324:             label="Reason (optional)"
- Line 1325:             placeholder="Reason shown to owner"
- Line 1326:             value={removeReason}
- Line 1327:             onChange={(e) => setRemoveReason(e.target.value)}
- Line 1328:           />
- Line 1329:           <div className="flex gap-2 justify-end">
- Line 1330:             <Button
- Line 1331:               variant="outline"
- Line 1332:               onClick={() => setRemoveModal({ open: false, house: null })}
- Line 1333:             >
- Line 1334:               Cancel
- Line 1335:             </Button>
- Line 1336:             <Button variant="danger" onClick={onRemoveHouse}>
- Line 1337:               Remove
- Line 1338:             </Button>
- Line 1339:           </div>
- Line 1340:         </div>
- Line 1341:       </Modal>
- Line 1342:     </div>
- Line 1343:   );
- Line 1344: }

