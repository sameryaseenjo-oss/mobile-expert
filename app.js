const data = window.APP_DATA || {};
const APPSHEET_APP_NAME = "Untitledspreadsheet-797120343";
const APPSHEET_MAIN_TABLE = "المعلومات العامة";
const APPSHEET_APP_VERSION = "1.000163";
const DATABASE_ENDPOINT = window.EXPERTS_DATABASE_ENDPOINT || localStorage.getItem("expertsDatabaseEndpoint") || "";
let selectedFormFiles = {};
const SIGNED_IMAGE_URLS = {
  "المعلومات العامة_Images/5.صورة عن الخزانة.103530.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F5.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86%D8%A9.103530.jpg&appVersion=1.000163&signature=553a90b7c42996bc0a79c9f2ba31e1a9c44dbdb88bc121d4224efa417b6ead53",
  "المعلومات العامة_Images/6.صورة عن الخزانة.121256.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F6.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86%D8%A9.121256.jpg&appVersion=1.000163&signature=e48f6ac3bc446d7294e7ed56e0cc7a6a3b163a94a5d42f54a6e3a4177fa86cf8",
  "المعلومات العامة_Images/7.صورة عن الخزانة.145206.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F7.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86%D8%A9.145206.jpg&appVersion=1.000163&signature=c2ba34978206de6ee00877ab8f5011f1bf898d6d9992bb1c4348b6b108e5431a",
  "المعلومات العامة_Images/8.صورة عن الخزانة.123719.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F8.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86%D8%A9.123719.jpg&appVersion=1.000163&signature=9fe82058e9aa01b3973f5f0e9e511e65ab8b7c9bd3d584680c8d22178bc0ee22",
  "المعلومات العامة_Images/9.صورة عن الخزانة.124744.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F9.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86%D8%A9.124744.jpg&appVersion=1.000163&signature=aadf17a06caea254b29b4a82e9ac3b9a449aa77bf8b3a966ac023202dbddf5be",
  "المعلومات العامة_Images/10.صورة عن الخزانة.071036.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F10.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86%D8%A9.071036.jpg&appVersion=1.000163&signature=e222a4213c7c35f1dbf16d82c6bad0f1427440eac0c5e3f2cbe4f2accf001392",
  "المعلومات العامة_Images/.شركة بوندي للتطوير العقاري.صورة عن الخزانة.120643.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F.%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A8%D9%88%D9%86%D8%AF%D9%8A%20%D9%84%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86%D8%A9.120643.jpg&appVersion=1.000163&signature=cdc00be329c73e7a91cc6b532134c400669f7d029ed72da1a861beb1ad317c19",
  "المعلومات العامة_Images/12.صورة عن الخزانة.121957.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F12.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86%D8%A9.121957.jpg&appVersion=1.000163&signature=4f24c6a5fb88c17ad0466e08e24edd100ab51844c92a312604633d896307ba03",
  "المعلومات العامة_Images/5.صورة عن الضغط.103530.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F5.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.103530.jpg&appVersion=1.000163&signature=0c2a36343fc8ac1015a6f2db1b7e3902ffdb509db7bf12dd15840902b57ed84c",
  "المعلومات العامة_Images/6.صورة عن الضغط.121313.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F6.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.121313.jpg&appVersion=1.000163&signature=5786e887a0095b043c6865a388a07253b31102f9af08726e926a1919cc609ac3",
  "المعلومات العامة_Images/7.صورة عن الضغط.071140.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F7.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.071140.jpg&appVersion=1.000163&signature=607fdc4b2379ba1bfa17f7ae5f887287bf6ecc15aca7d79c0914f2e4d6141c6b",
  "المعلومات العامة_Images/8.صورة عن الضغط.071252.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F8.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.071252.jpg&appVersion=1.000163&signature=926517c4d5d0f0615832be1c8e50ed2ff069ed37e1b9cf9c0f583a3cb35abc15",
  "المعلومات العامة_Images/9.صورة عن الضغط.071341.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F9.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.071341.jpg&appVersion=1.000163&signature=7bb14b716ae2d9edba66aa98e50e243d909e2599497a0ca988a2eca470a7aa57",
  "المعلومات العامة_Images/10.صورة عن الضغط.071036.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F10.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.071036.jpg&appVersion=1.000163&signature=4afee98ecac31f70cf1887df3cc2eb9d09c3fd34d8e17d1ab56d3d619adb3d3e",
  "المعلومات العامة_Images/.شركة بوندي للتطوير العقاري.صورة عن الضغط.120643.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F.%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A8%D9%88%D9%86%D8%AF%D9%8A%20%D9%84%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.120643.jpg&appVersion=1.000163&signature=15fa2c4112825088b7d7ba7320393ffc63b7c295e2871b4e98dc2529b84dc8f9",
  "المعلومات العامة_Images/12.صورة عن الضغط.121956.jpg": "https://www.appsheet.com/image/getimageurl?appName=Untitledspreadsheet-797120343&tableName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9&fileName=%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_Images%2F12.%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.121956.jpg&appVersion=1.000163&signature=d9a34a97307cc5b6d09351388928fe70cab01355d896c08d16f543ef4266658e",
};
const mainRows = data["الرئيسية"] || [];
mainRows.forEach((row, index) => ensureRecordIdentity(row, index));
const originalMainRows = mainRows.map((row) => ({ ...row }));
const agreements = data["اتفاقيات"] || [];
const accounts = data["اسماء الحسابات"] || [];
const tasks = data["جدول الاعمال"] || [];
const deletedProjectIds = JSON.parse(localStorage.getItem("expertsDeletedProjectIds") || "[]").map(String);
const deletedAccountIds = JSON.parse(localStorage.getItem("expertsDeletedAccountIds") || "[]").map(String);
removeDeletedRows(mainRows, deletedProjectIds);
removeDeletedRows(accounts, deletedAccountIds);
JSON.parse(localStorage.getItem("expertsPendingRecords") || "[]").forEach((row) => {
  ensureRecordIdentity(row);
  const sameId = mainRows.some((item) => String(item._id) === String(row._id));
  const sameRecord = mainRows.some((item) => sameRecordKey(item, row));
  if (!deletedProjectIds.includes(String(row._id)) && !sameId && !sameRecord) mainRows.unshift(row);
});
JSON.parse(localStorage.getItem("expertsPendingAccounts") || "[]").forEach((row) => {
  if (!deletedAccountIds.includes(String(row._id)) && !accounts.some((item) => String(item._id) === String(row._id))) accounts.unshift(row);
});

const app = document.querySelector("#app");
const title = document.querySelector("#viewTitle");
const subtitle = document.querySelector("#viewSubtitle");
const backBtn = document.querySelector("#backBtn");
const searchBtn = document.querySelector("#searchBtn");
const addBtn = document.querySelector("#addBtn");
const navButtons = [...document.querySelectorAll(".bottom-nav button")];
document.querySelector(".bottom-nav [data-view='projects']")?.replaceChildren(
  Object.assign(document.createElement("span"), { textContent: "▣" }),
  document.createTextNode("الحسابات")
);

let state = {
  view: "home",
  selectedId: null,
  selectedProjectName: null,
  query: "",
  searchOpen: false,
  history: [],
  syncStatus: DATABASE_ENDPOINT ? "متصل بقاعدة البيانات - الحفظ مفعل" : "غير متصل بقاعدة البيانات",
};

const labels = {
  home: ["الرئيسية", "متابعة المشاريع والملاحظات"],
  projects: ["الحسابات الرئيسية", "اختر اسم الحساب الرئيسي لعرض مشاريعه"],
  projectRecords: ["مشاريع الحساب", "كل المشاريع تحت اسم الحساب الرئيسي"],
  tasks: ["جدول الأعمال", "المهام والحالة"],
  agreements: ["اتفاقيات", "ملفات الاتفاقيات"],
  accounts: ["اسماء الحسابات", "جهات الاتصال والفنيين"],
  detail: ["تفاصيل المشروع", "الصور والضغط والملاحظات"],
  form: ["تعديل البيانات", "نموذج إدخال المشروع"],
  accountForm: ["إضافة حساب", "بيانات الحساب والشخص المسؤول"],
  report: ["تقرير PDF", "معاينة التقرير قبل الحفظ"],
};

function value(row, key, fallback = "-") {
  let found = row?.[key];
  if ((found === undefined || found === null) && row && typeof key === "string") {
    const normalizedKey = key.trim();
    const actualKey = Object.keys(row).find((candidate) => candidate.trim() === normalizedKey);
    found = actualKey ? row[actualKey] : found;
  }
  return found === null || found === undefined || found === "" ? fallback : found;
}

function boolText(v) {
  return v === true || v === "TRUE" || v === "نعم" ? "نعم" : "لا";
}

function normalize(text) {
  return String(text || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function navigate(view, selectedId = null, push = true, selectedProjectName = null) {
  if (push) state.history.push({ view: state.view, selectedId: state.selectedId, selectedProjectName: state.selectedProjectName });
  state.view = view;
  state.selectedId = selectedId;
  state.selectedProjectName = selectedProjectName;
  state.searchOpen = false;
  render();
}

function goBack() {
  const previous = state.history.pop();
  if (!previous) {
    navigate("home", null, false);
    return;
  }
  state.view = previous.view;
  state.selectedId = previous.selectedId;
  state.selectedProjectName = previous.selectedProjectName || null;
  render();
}

function setHeader() {
  const key = state.view === "detail" || state.view === "form" ? state.view : state.view;
  title.textContent = labels[key]?.[0] || labels.home[0];
  subtitle.textContent = state.view === "projectRecords" && state.selectedProjectName ? state.selectedProjectName : labels[key]?.[1] || labels.home[1];
  backBtn.style.visibility = state.history.length || state.view !== "home" ? "visible" : "hidden";
  addBtn.style.display = ["home", "tasks", "agreements", "accounts"].includes(state.view) ? "block" : "none";
  const activeView = state.view === "projectRecords" ? "projects" : state.view;
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));
}

function searchBox() {
  const placeholder = state.view === "home" || state.view === "projects" || state.view === "projectRecords" ? "بحث باسم الحساب الرئيسي أو المشروع" : "بحث";
  const accountNames = state.view === "home" ? accountSearchNames() : [];
  return `
    <div class="search-panel ${state.searchOpen ? "open" : ""}">
      <input id="searchInput" type="search" placeholder="${placeholder}" value="${escapeHtml(state.query)}">
      ${state.view === "home" ? `
        <select id="accountSearchSelect" class="search-select">
          <option value="">اختر من الحسابات</option>
          ${accountNames.map((name) => `<option value="${escapeHtml(name)}" ${state.query === name ? "selected" : ""}>${escapeHtml(name)}</option>`).join("")}
        </select>
      ` : ""}
    </div>
  `;
}

function stats() {
  const withNotes = mainRows.filter((row) => value(row, "ملاحظات", "") !== "").length;
  const activeTasks = tasks.filter((row) => value(row, "الحالة", "") === "فعال").length;
  const signed = mainRows.filter((row) => value(row, "توقيع المهندس المقيم", "") !== "").length;
  return `
    <section class="stats">
      <div class="stat"><strong>${mainRows.length}</strong><span>سجل مشروع</span></div>
      <div class="stat"><strong>${activeTasks}</strong><span>مهام فعالة</span></div>
      <div class="stat"><strong>${withNotes}</strong><span>ملاحظات</span></div>
      <div class="stat"><strong>${signed}</strong><span>تواقيع</span></div>
      <div class="stat"><strong>${agreements.length}</strong><span>اتفاقيات</span></div>
      <div class="stat"><strong>${accounts.length}</strong><span>حسابات</span></div>
    </section>
  `;
}

function syncBanner() {
  return `
    <div class="sync-banner">
      <span>${escapeHtml(state.syncStatus)}</span>
      ${DATABASE_ENDPOINT ? `
        <button class="secondary small-action" type="button" id="backupImagesBtn">نسخ الصور إلى Drive</button>
      ` : ""}
    </div>
  `;
}

function filteredRows(rows, keys) {
  const q = normalize(state.query);
  if (!q) return rows;
  return rows.filter((row) => keys.some((key) => normalize(value(row, key, "")).includes(q)));
}

function renderHome() {
  const rows = filteredRows(mainRows, ["اسم المشروع", "اسم الشركة"]);
  const cards = rows.map((row) => {
    const pressure = value(row, "الضغط", "");
    const notes = value(row, "ملاحظات", "");
    const cabinetUrl = appSheetImageUrl(value(row, "صورة عن الخزانة", ""));
    return `
      <article class="record-card" data-id="${row._id}" role="button" tabindex="0">
        <div class="thumb">${cabinetUrl ? `<img src="${escapeHtml(cabinetUrl)}" alt="">` : escapeHtml(String(value(row, "اسم الشقة/رقمها", row._id)).slice(0, 3))}</div>
        <div class="record-body">
          <h2>${escapeHtml(value(row, "اسم المشروع"))}</h2>
          <div class="meta">${escapeHtml(value(row, "اسم الشركة"))}<br>${escapeHtml(value(row, "الطابق "))} | شقة ${escapeHtml(value(row, "اسم الشقة/رقمها"))}</div>
          <div class="chips">
            <span class="chip">ضغط ${escapeHtml(pressure || "-")}</span>
            <span class="chip ${notes ? "warn" : "ok"}">${notes ? "يوجد ملاحظة" : "بدون ملاحظات"}</span>
            <span class="chip">${escapeHtml(value(row, "نوع البويلر"))}</span>
          </div>
          <div class="card-actions">
            <button class="danger small-action" type="button" data-delete-project="${row._id}">حذف</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
  app.innerHTML = searchBox() + syncBanner() + stats() + `<section class="list">${cards || empty()}</section>`;
  bindSearch();
  bindBackupButton();
  bindDeleteButtons();
  app.querySelectorAll(".record-card").forEach((card) => {
    card.addEventListener("click", () => navigate("detail", card.dataset.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") navigate("detail", card.dataset.id);
    });
  });
}

function projectGroups() {
  const groups = new Map();
  mainRows.forEach((row) => {
    const name = String(value(row, "اسم الشركة", "") || "").trim();
    if (!name) return;
    if (!groups.has(name)) groups.set(name, []);
    groups.get(name).push(row);
  });
  return [...groups.entries()].sort((a, b) => String(a[0]).localeCompare(String(b[0]), "ar"));
}

function renderProjects() {
  const q = normalize(state.query);
  const groups = projectGroups().filter(([name, rows]) => {
    if (!q) return true;
    return normalize(name).includes(q) || rows.some((row) => normalize(value(row, "اسم المشروع", "")).includes(q));
  });

  app.innerHTML = searchBox() + `
    <section class="project-tabs">
      ${groups.map(([name, rows]) => {
        const projectNames = [...new Set(rows.map((row) => value(row, "اسم المشروع", "")).filter(Boolean))].slice(0, 3);
        const withNotes = rows.filter((row) => value(row, "ملاحظات", "") !== "").length;
        return `
          <button class="project-tab" type="button" data-project="${escapeHtml(name)}">
            <strong>${escapeHtml(name)}</strong>
            <span>${rows.length} سجل${projectNames.length ? ` | ${escapeHtml(projectNames.join("، "))}` : ""}</span>
            <em>${withNotes ? `${withNotes} ملاحظات` : "بدون ملاحظات"}</em>
          </button>
        `;
      }).join("") || empty()}
    </section>
  `;
  bindSearch();
  app.querySelectorAll(".project-tab").forEach((button) => {
    button.addEventListener("click", () => navigate("projectRecords", null, true, button.dataset.project));
  });
}

function renderProjectRecords() {
  const selectedName = state.selectedProjectName || "";
  const q = normalize(state.query);
  const rows = mainRows.filter((row) => {
    const sameProject = String(value(row, "اسم الشركة", "") || "").trim() === selectedName;
    if (!sameProject) return false;
    if (!q) return true;
    return ["اسم المشروع", "الطابق ", "اسم الشقة/رقمها", "ملاحظات"].some((key) => normalize(value(row, key, "")).includes(q));
  });

  app.innerHTML = searchBox() + `
    <section class="project-record-heading">
      <strong>${escapeHtml(selectedName || "مشروع")}</strong>
      <span>${rows.length} سجل</span>
    </section>
    <section class="list">
      ${rows.map((row) => {
        const pressure = value(row, "الضغط", "");
        const notes = value(row, "ملاحظات", "");
        const cabinetUrl = appSheetImageUrl(value(row, "صورة عن الخزانة", ""));
        return `
          <article class="record-card" data-id="${row._id}" role="button" tabindex="0">
            <div class="thumb">${cabinetUrl ? `<img src="${escapeHtml(cabinetUrl)}" alt="">` : escapeHtml(String(value(row, "اسم الشقة/رقمها", row._id)).slice(0, 3))}</div>
            <div class="record-body">
              <h2>${escapeHtml(value(row, "اسم المشروع"))}</h2>
              <div class="meta">${escapeHtml(value(row, "الطابق "))} | شقة ${escapeHtml(value(row, "اسم الشقة/رقمها"))}</div>
              <div class="chips">
                <span class="chip">ضغط ${escapeHtml(pressure || "-")}</span>
                <span class="chip ${notes ? "warn" : "ok"}">${notes ? "يوجد ملاحظة" : "بدون ملاحظات"}</span>
                <span class="chip">${escapeHtml(value(row, "نوع البويلر"))}</span>
              </div>
            </div>
          </article>
        `;
      }).join("") || empty()}
    </section>
  `;
  bindSearch();
  app.querySelectorAll(".record-card").forEach((card) => {
    card.addEventListener("click", () => navigate("detail", card.dataset.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") navigate("detail", card.dataset.id);
    });
  });
}

function renderDetail() {
  const row = mainRows.find((item) => String(item._id) === String(state.selectedId)) || mainRows[0];
  app.innerHTML = `
    ${detailHero(row)}
    <section class="detail-section">
      <h2>${escapeHtml(value(row, "اسم المشروع"))}</h2>
      <div class="info-grid">
        ${info("اسم الشركة", value(row, "اسم الشركة"))}
        ${info("عنوان المشروع", value(row, "عنوان المشروع"))}
        ${info("الطابق", value(row, "الطابق "))}
        ${info("الشقة", value(row, "اسم الشقة/رقمها"))}
        ${info("رقم الخزانة", value(row, "رقم الخزانة"))}
        ${info("عدد اللوبات", value(row, "عدد لوبات التدفئة تحت البلاط"))}
        ${info("إجمالي طول الأنابيب", value(row, "اجمالي طول الانابيب"))}
      </div>
    </section>
    <section class="detail-section">
      <h2>المعلومات الفنية</h2>
      <div class="info-grid">
        ${info("نوع البويلر", value(row, "نوع البويلر"))}
        ${info("قياس البويلر", value(row, "قياس البويلر"))}
        ${info("نوع الخط الرئيسي", value(row, "نوع الخط الرئيسي"))}
        ${info("قياس الخط الرئيسي", value(row, "قياس الخط الرئيسي"))}
        ${info("ROOM BY ROOM", boolText(row["ROOM BY ROOM"]))}
        ${info("تركيب البانيل", value(row, "تركيب البانيل"))}
        ${info("نسخة المخطط", value(row, "نسخة المخطط"))}
        ${info("الضغط", value(row, "الضغط"))}
        ${info("تاريخ قراءة الضغط", value(row, "تاريخ قرائة الضغط"))}
      </div>
    </section>
    <section class="detail-section">
      <h2>الصور والملاحظات</h2>
      <div class="photo-grid">
        ${imageFields(row).map((key) => photoCard(row, key)).join("") || empty()}
      </div>
      <div class="info-grid">
        ${info("ملاحظات", value(row, "ملاحظات"))}
        ${info("الإجراء المتخذ", value(row, "الاجراء المتخذ"))}
      </div>
      <div class="actions">
        <button class="primary" id="editRecord">تعديل</button>
        <button class="secondary" id="copyRecord">نسخ</button>
        <button class="secondary wide-action" id="pdfReport">تقرير PDF</button>
      </div>
    </section>
  `;
  document.querySelector("#editRecord").addEventListener("click", () => navigate("form", row._id));
  document.querySelector("#copyRecord").addEventListener("click", () => navigate("form", row._id));
  document.querySelector("#pdfReport").addEventListener("click", () => navigate("report", row._id));
  const actions = document.querySelector(".actions");
  actions?.insertAdjacentHTML("beforeend", `<button class="danger wide-action" type="button" id="deleteRecord">حذف السجل</button>`);
  document.querySelector("#deleteRecord")?.addEventListener("click", () => deleteProject(row._id));
}

function detailHero(row) {
  const cabinetPath = value(row, "صورة عن الخزانة", "");
  const cabinetName = fileLabel(cabinetPath);
  const cabinetUrl = appSheetImageUrl(cabinetPath);
  return `
    <section class="detail-hero cabinet-hero">
      ${cabinetUrl
        ? `<img class="cabinet-image" src="${escapeHtml(cabinetUrl)}" alt="صورة عن الخزانة" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">`
        : ""}
      <div class="cabinet-placeholder" ${cabinetUrl ? "hidden" : ""}>
        <strong>صورة عن الخزانة</strong>
        <span>${escapeHtml(cabinetName || "لا توجد صورة")}</span>
      </div>
    </section>
  `;
}

function photoCard(row, key) {
  const imagePath = value(row, key, "");
  const imageUrl = appSheetImageUrl(imagePath);
  const imageName = fileLabel(imagePath);
  return `
    <figure class="photo-card">
      <figcaption>${escapeHtml(key)}</figcaption>
      ${imageUrl
        ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(key)}" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">`
        : ""}
      <div class="photo-placeholder" ${imageUrl ? "hidden" : ""}>${escapeHtml(imageName || "لا توجد صورة")}</div>
    </figure>
  `;
}

function imageFields(row) {
  return Object.keys(row || {}).filter((key) => {
    const hasImageName = key.includes("صورة") || key.includes("توقيع");
    return hasImageName && value(row, key, "") !== "";
  });
}

function reportRows(row) {
  return [
    ["اسم الشركة", value(row, "اسم الشركة")],
    ["اسم المشروع", value(row, "اسم المشروع")],
    ["عنوان المشروع", value(row, "عنوان المشروع")],
    ["الطابق", value(row, "الطابق ")],
    ["اسم الشقة/رقمها", value(row, "اسم الشقة/رقمها")],
    ["رقم الخزانة", value(row, "رقم الخزانة")],
    ["عدد لوبات التدفئة تحت البلاط", value(row, "عدد لوبات التدفئة تحت البلاط")],
    ["اجمالي طول الانابيب", value(row, "اجمالي طول الانابيب")],
    ["نوع البويلر", value(row, "نوع البويلر")],
    ["قياس البويلر", value(row, "قياس البويلر")],
    ["نوع الخط الرئيسي", value(row, "نوع الخط الرئيسي")],
    ["قياس الخط الرئيسي", value(row, "قياس الخط الرئيسي")],
    ["ROOM BY ROOM", boolText(row["ROOM BY ROOM"])],
    ["تركيب البانيل", value(row, "تركيب البانيل")],
    ["نسخة المخطط", value(row, "نسخة المخطط")],
    ["الضغط", value(row, "الضغط")],
    ["تاريخ قراءة الضغط", value(row, "تاريخ قرائة الضغط")],
    ["ملاحظات", value(row, "ملاحظات")],
    ["الإجراء المتخذ", value(row, "الاجراء المتخذ")],
  ];
}

function renderReport() {
  const row = mainRows.find((item) => String(item._id) === String(state.selectedId)) || mainRows[0];
  const rows = [
    ["الشقة", value(row, "اسم الشقة/رقمها")],
    ["الطابق", value(row, "الطابق ")],
    ["الضغط", value(row, "الضغط")],
  ];
  app.innerHTML = `
    <section class="report-toolbar no-print">
      <button class="primary" id="printReport">حفظ / طباعة PDF</button>
      <button class="secondary" id="downloadReport">تحميل التقرير</button>
      <button class="secondary" id="shareReportWhatsapp">إرسال عبر واتساب</button>
      <button class="secondary" id="backToProject">رجوع للمشروع</button>
      <p class="report-status" id="reportStatus"></p>
      <a class="download-link" id="manualDownload" hidden>اضغط هنا لتحميل التقرير</a>
    </section>
    <article class="report-page">
      <header class="report-header">
        <img src="experts-logo.png?v=20260614-logo-root" alt="EXPERTS" class="report-logo">
        <div>
          <h2>تقرير معلومات المشروع</h2>
          <p>${escapeHtml(value(row, "اسم الشركة"))} | ${escapeHtml(value(row, "اسم المشروع"))}</p>
        </div>
      </header>
      <section class="report-summary">
        ${rows.map(([label, text]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(text)}</strong></div>`).join("")}
      </section>
      <section class="report-images">
        ${reportImageFields(row).map((key) => reportImage(row, key)).join("")}
      </section>
      <table class="report-table">
        <tbody>
          ${reportRows(row).map(([label, text]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(text)}</td></tr>`).join("")}
        </tbody>
      </table>
      <section class="report-signatures">
        ${reportSignature(row)}
        <div>توقيع العميل</div>
      </section>
    </article>
  `;
  document.querySelector("#printReport").addEventListener("click", () => printReport());
  document.querySelector("#downloadReport").addEventListener("click", () => openStandaloneReport(row));
  document.querySelector("#shareReportWhatsapp").addEventListener("click", () => shareReportWhatsapp(row));
  document.querySelector("#backToProject").addEventListener("click", goBack);
}

function printReport() {
  const status = document.querySelector("#reportStatus");
  if (status) {
    status.textContent = "إذا لم تظهر نافذة الطباعة، استخدم زر تحميل التقرير وافتحه في Chrome ثم اختر Save as PDF.";
  }
  window.print();
}

function openStandaloneReport(row) {
  const reportUrl = `report.html?id=${encodeURIComponent(row._id)}`;
  const manualLink = document.querySelector("#manualDownload");
  if (manualLink) {
    manualLink.href = reportUrl;
    manualLink.removeAttribute("download");
    manualLink.hidden = false;
    manualLink.textContent = "اضغط هنا لفتح التقرير في صفحة مستقلة";
  }
  const status = document.querySelector("#reportStatus");
  if (status) status.textContent = "سيتم فتح التقرير كصفحة مستقلة. من هناك اختر حفظ / طباعة PDF.";
  window.location.href = reportUrl;
}

async function shareReportWhatsapp(row) {
  const status = document.querySelector("#reportStatus");
  const reportUrl = new URL(`report.html?id=${encodeURIComponent(row._id)}`, window.location.href).href;
  const message = [
    "تقرير معلومات المشروع",
    `الشركة: ${value(row, "اسم الشركة")}`,
    `المشروع: ${value(row, "اسم المشروع")}`,
    `الشقة: ${value(row, "اسم الشقة/رقمها")}`,
    reportUrl,
  ].join("\n");

  if (navigator.share) {
    try {
      await navigator.share({
        title: "تقرير معلومات المشروع",
        text: message,
        url: reportUrl,
      });
      if (status) status.textContent = "تم فتح خيارات المشاركة. اختر واتساب لإرسال التقرير.";
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }

  if (status) status.textContent = "سيتم فتح واتساب برسالة تحتوي رابط التقرير. لإرسال PDF فعلي استخدم حفظ / طباعة PDF ثم شارك الملف من الهاتف.";
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
}

function reportImage(row, key) {
  const imagePath = value(row, key, "");
  const imageUrl = appSheetImageUrl(imagePath);
  return `
    <figure class="report-image">
      <figcaption>${escapeHtml(key)}</figcaption>
      ${imageUrl
        ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(key)}" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">`
        : ""}
      <div ${imageUrl ? "hidden" : ""}>${escapeHtml(fileLabel(imagePath) || "لا توجد صورة")}</div>
    </figure>
  `;
}

function reportImageFields(row) {
  return imageFields(row).filter((key) => !key.includes("توقيع"));
}

function reportSignature(row) {
  const key = "توقيع المهندس المقيم";
  const imagePath = value(row, key, "");
  const imageUrl = appSheetImageUrl(imagePath);
  return `
    <div class="report-signature-box">
      <span>${key}</span>
      ${imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${key}" onerror="this.hidden=true;">` : ""}
    </div>
  `;
}

function renderForm() {
  const row = mainRows.find((item) => String(item._id) === String(state.selectedId)) || {};
  app.innerHTML = `
    <form class="form">
      ${field("اسم الشركة", value(row, "اسم الشركة", ""), "select", allCompanyNames())}
      ${field("اسم المشروع", value(row, "اسم المشروع", ""))}
      ${field("عنوان المشروع", value(row, "عنوان المشروع", ""))}
      ${field("الطابق", value(row, "الطابق ", ""))}
      ${field("اسم الشقة/رقمها", value(row, "اسم الشقة/رقمها", ""))}
      ${field("رقم الخزانة", value(row, "رقم الخزانة", ""))}
      ${field("عدد لوبات التدفئة تحت البلاط", value(row, "عدد لوبات التدفئة تحت البلاط", ""), "number")}
      ${field("اجمالي طول الانابيب", value(row, "اجمالي طول الانابيب", ""))}
      ${field("نوع البويلر", value(row, "نوع البويلر", ""), "select", unique(mainRows, "نوع البويلر"))}
      ${field("قياس البويلر", value(row, "قياس البويلر", ""))}
      ${field("نوع الخط الرئيسي", value(row, "نوع الخط الرئيسي", ""), "select", unique(mainRows, "نوع الخط الرئيسي"))}
      ${field("قياس الخط الرئيسي", value(row, "قياس الخط الرئيسي", ""))}
      ${field("ROOM BY ROOM", value(row, "ROOM BY ROOM", ""), "select", ["true", "false"])}
      ${field("تركيب البانيل", value(row, "تركيب البانيل", ""), "select", unique(mainRows, "تركيب البانيل"))}
      ${field("نسخة المخطط", value(row, "نسخة المخطط", ""))}
      ${field("الضغط", value(row, "الضغط", ""), "number")}
      ${field("تاريخ قراءة الضغط", value(row, "تاريخ قرائة الضغط", ""), "date")}
      ${area("ملاحظات", value(row, "ملاحظات", ""))}
      ${area("الإجراء المتخذ", value(row, "الاجراء المتخذ", ""))}
      ${imageField("صورة عن الخزانة", "cabinetImage")}
      ${imageField("صورة عن الضغط", "pressureImage")}
      ${imageField("صورة ملاحظات", "notesImage")}
      <div class="field">
        <label>توقيع المهندس المقيم</label>
        <div class="signature-pad">
          <canvas id="signatureCanvas" aria-label="منطقة رسم التوقيع"></canvas>
          <div class="signature-hint">ارسم التوقيع هنا</div>
        </div>
        <div class="signature-actions">
          <button class="secondary" type="button" id="clearSignature">مسح التوقيع</button>
        </div>
        <input type="hidden" id="signatureData" data-field="توقيع المهندس المقيم" value="">
      </div>
      <div class="actions">
        <button class="primary" type="button" id="saveForm">حفظ</button>
        <button class="secondary" type="button" id="cancelForm">إلغاء</button>
      </div>
      <p class="form-status" id="formStatus"></p>
    </form>
  `;
  setupImageInputs();
  setupSignaturePad();
  document.querySelector("#saveForm").addEventListener("click", () => saveProjectForm(row));
  document.querySelector("#cancelForm").addEventListener("click", () => goBack());
}

function renderAccountForm() {
  app.innerHTML = `
    <form class="form">
      ${field("اسم الشركة", "")}
      ${field("الشخص المسؤول", "")}
      ${field("رقم هاتفه", "","tel")}
      ${field("المهندس المقيم", "")}
      ${field("الفني", "")}
      <div class="actions">
        <button class="primary" type="button" id="saveAccount">حفظ الحساب</button>
        <button class="secondary" type="button" id="cancelAccount">إلغاء</button>
      </div>
      <p class="form-status" id="formStatus"></p>
    </form>
  `;
  document.querySelector("#saveAccount").addEventListener("click", saveAccountForm);
  document.querySelector("#cancelAccount").addEventListener("click", () => navigate("accounts", null, false));
}

function setupImageInputs() {
  selectedFormFiles = {};
  document.querySelectorAll(".image-field").forEach((field) => {
    const preview = field.querySelector(".image-preview");
    const fileName = field.querySelector(".image-file-name");
    const galleryInput = field.querySelector("[data-source='gallery']");
    const cameraInput = field.querySelector("[data-source='camera']");
    const fieldName = field.dataset.imageField || field.querySelector("label")?.textContent || "";

    function handleSelection(event) {
      const file = event.target.files?.[0];
      if (!file) return;
      fileName.textContent = file.name || "تم اختيار صورة";
      const url = URL.createObjectURL(file);
      preview.innerHTML = `<img src="${url}" alt="">`;
      preview.classList.add("has-image");
      const entry = {
        name: file.name || `${Date.now()}.jpg`,
        type: "image/jpeg",
        data: "",
        previewUrl: url,
      };
      entry.ready = imageFileToDataUrl(file).then((dataUrl) => {
        entry.data = dataUrl;
        entry.previewUrl = dataUrl;
        return entry;
      });
      selectedFormFiles[fieldName] = entry;
    }

    galleryInput.addEventListener("change", handleSelection);
    cameraInput.addEventListener("change", handleSelection);
  });
}

function setupSignaturePad() {
  const canvas = document.querySelector("#signatureCanvas");
  const signatureData = document.querySelector("#signatureData");
  const clearButton = document.querySelector("#clearSignature");
  const hint = document.querySelector(".signature-hint");
  if (!canvas || !signatureData || !clearButton) return;

  const context = canvas.getContext("2d");
  let drawing = false;
  let hasInk = false;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    const previous = hasInk ? canvas.toDataURL("image/png") : "";
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.lineWidth = 2.4;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#17202a";
    if (previous) {
      const image = new Image();
      image.onload = () => context.drawImage(image, 0, 0, rect.width, rect.height);
      image.src = previous;
    }
  }

  function point(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  function start(event) {
    event.preventDefault();
    drawing = true;
    const p = point(event);
    context.beginPath();
    context.moveTo(p.x, p.y);
  }

  function draw(event) {
    if (!drawing) return;
    event.preventDefault();
    const p = point(event);
    context.lineTo(p.x, p.y);
    context.stroke();
    hasInk = true;
    hint.classList.add("hidden");
  }

  function end() {
    if (!drawing) return;
    drawing = false;
    signatureData.value = hasInk ? canvas.toDataURL("image/png") : "";
  }

  clearButton.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    hasInk = false;
    signatureData.value = "";
    hint.classList.remove("hidden");
  });

  canvas.addEventListener("pointerdown", start);
  canvas.addEventListener("pointermove", draw);
  canvas.addEventListener("pointerup", end);
  canvas.addEventListener("pointercancel", end);
  canvas.addEventListener("pointerleave", end);

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });
}

function imageFileToDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSide = 1400;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.onerror = () => resolve(reader.result);
      image.src = reader.result;
    };
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

async function waitForSelectedFiles() {
  await Promise.all(Object.values(selectedFormFiles).map((file) => file.ready).filter(Boolean));
}

function collectProjectForm(originalRow = {}) {
  const fields = { ...originalRow };
  document.querySelectorAll("[data-field]").forEach((input) => {
    fields[input.dataset.field] = input.value;
  });
  Object.entries(selectedFormFiles).forEach(([fieldName, file]) => {
    fields[fieldName] = file.data || file.previewUrl || `المعلومات العامة_Images/${file.name}`;
  });
  if (!fields._id) fields._id = Date.now();
  return fields;
}

async function saveProjectForm(originalRow = {}) {
  const button = document.querySelector("#saveForm");
  const status = document.querySelector("#formStatus");
  if (button) button.disabled = true;
  if (status) status.textContent = "جاري تجهيز الصور...";
  await waitForSelectedFiles();
  const fields = collectProjectForm(originalRow);
  const remoteFields = { ...fields };
  const remoteFiles = {};
  Object.entries(selectedFormFiles).forEach(([fieldName, file]) => {
    const uploadName = clientImageFileName(fields, fieldName, file.name);
    remoteFields[fieldName] = uploadName || remoteFields[fieldName] || "";
    remoteFiles[fieldName] = {
      name: uploadName,
      type: file.type || "image/jpeg",
      data: file.data || "",
    };
  });
  const payload = {
    table: "الرئيسية",
    id: originalRow._id || fields._id,
    fields: remoteFields,
    files: remoteFiles,
  };

  if (status) status.textContent = "جاري الحفظ...";

  saveLocalRecord(remoteFields);
  upsertVisibleRecord(fields);

  if (!DATABASE_ENDPOINT) {
    if (status) status.textContent = "تم الحفظ على الهاتف مؤقتا. يجب ربط رابط قاعدة البيانات حتى يصل إلى Google Sheet.";
    window.setTimeout(() => navigate("detail", fields._id, false), 900);
    return;
  }

  try {
    await fetch(DATABASE_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    if (status) status.textContent = "تم إرسال البيانات. انتظر قليلا حتى تظهر صور Drive...";
    const savedKey = recordMatchKey(fields);
    window.setTimeout(() => {
      loadRemoteDatabase({ selectKey: savedKey });
    }, 4500);
  } catch (error) {
    if (status) status.textContent = "تعذر الاتصال بقاعدة البيانات. تم حفظ نسخة مؤقتة على الهاتف.";
    if (button) button.disabled = false;
  }
}

function saveLocalRecord(row) {
  try {
    const saved = JSON.parse(localStorage.getItem("expertsPendingRecords") || "[]");
    const next = saved.filter((item) => String(item._id) !== String(row._id));
    next.push(row);
    localStorage.setItem("expertsPendingRecords", JSON.stringify(next));
  } catch (error) {
    // Very large mobile photos can exceed browser storage; keep the in-memory record visible.
  }
}

function clientImageFileName(fields, fieldName, originalName) {
  const project = value(fields, "اسم المشروع", "بدون-مشروع");
  const floor = value(fields, "الطابق", "بدون-طابق");
  const apartment = value(fields, "اسم الشقة/رقمها", "بدون-شقة");
  const ext = imageExtension(originalName, String(fieldName || "").includes("توقيع") ? "png" : "jpg");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15);
  return [
    cleanFileNamePart(project),
    cleanFileNamePart(floor),
    cleanFileNamePart(apartment),
    cleanFileNamePart(fieldName || "صورة"),
    stamp,
  ].join("_") + `.${ext}`;
}

function cleanFileNamePart(text) {
  return String(text || "")
    .trim()
    .replace(/[\\/:*?"<>|#%{}~&]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 70) || "بدون-اسم";
}

function imageExtension(name, fallback) {
  const match = String(name || "").match(/\.([a-zA-Z0-9]{2,5})$/);
  return match ? match[1].toLowerCase().replace("jpeg", "jpg") : fallback;
}

function upsertVisibleRecord(row) {
  ensureRecordIdentity(row);
  const index = mainRows.findIndex((item) => String(item._id) === String(row._id) || sameRecordKey(item, row));
  if (index >= 0) {
    mainRows[index] = { ...mainRows[index], ...row };
    ensureRecordIdentity(mainRows[index], index);
    return;
  }
  mainRows.unshift(row);
}

function prepareMainRows(rows = []) {
  return rows.map((row, index) => {
    const next = { ...row };
    ensureRecordIdentity(next, index);
    return next;
  });
}

function ensureRecordIdentity(row, index = 0) {
  if (!row || row._id) return row;
  const key = recordMatchKey(row) || `row-${index}`;
  row._id = `remote-${simpleHash(key)}`;
  return row;
}

function simpleHash(text) {
  let hash = 0;
  String(text || "").split("").forEach((char) => {
    hash = ((hash << 5) - hash + char.charCodeAt(0)) | 0;
  });
  return Math.abs(hash).toString(36);
}

function sameRecordKey(a, b) {
  const left = recordMatchKey(a);
  const right = recordMatchKey(b);
  return Boolean(left && right && left === right);
}

function removeDeletedRows(rows, ids) {
  for (let index = rows.length - 1; index >= 0; index -= 1) {
    if (ids.includes(String(rows[index]._id))) rows.splice(index, 1);
  }
}

function replaceRows(targetRows, sourceRows = []) {
  targetRows.splice(0, targetRows.length, ...sourceRows);
}

function mergeDuplicateRecords(rows = []) {
  const byKey = new Map();
  rows.forEach((row) => {
    const key = recordMatchKey(row) || String(row._id || "");
    if (!key) return;
    const existing = byKey.get(key);
    if (!existing) {
      byKey.set(key, { ...row });
      return;
    }
    byKey.set(key, mergePreferredRecord(existing, row));
  });
  return [...byKey.values()];
}

function mergePreferredRecord(a, b) {
  const merged = { ...a };
  Object.keys(b || {}).forEach((key) => {
    const current = merged[key];
    const next = b[key];
    if (preferValue(next, current, key)) merged[key] = next;
  });
  return merged;
}

function preferValue(next, current, key) {
  if (next === null || next === undefined || next === "") return false;
  if (current === null || current === undefined || current === "") return true;
  if (isImageKey(key)) {
    const nextText = String(next);
    const currentText = String(current);
    if (nextText.includes("drive.google.com/thumbnail") && !currentText.includes("drive.google.com/thumbnail")) return true;
    if (/^data:image\//i.test(currentText) && nextText.includes("drive.google.com/thumbnail")) return true;
  }
  return false;
}

function withImageFallbacks(sourceRows = []) {
  return sourceRows.map((row) => {
    const original = findOriginalRow(row);
    if (!original) return row;
    const next = { ...original, ...row };
    Object.keys(original).forEach((key) => {
      if (!isImageKey(key)) return;
      const current = value(next, key, "");
      const fallback = value(original, key, "");
      if (!current && fallback) next[key] = fallback;
    });
    return next;
  });
}

function findOriginalRow(row) {
  const byId = originalMainRows.find((item) => String(item._id) === String(row._id));
  if (byId) return byId;
  const remoteKey = recordMatchKey(row);
  return originalMainRows.find((item) => recordMatchKey(item) === remoteKey);
}

function recordMatchKey(row) {
  return [
    value(row, "اسم الشركة", ""),
    value(row, "اسم المشروع", ""),
    value(row, "الطابق", ""),
    value(row, "اسم الشقة/رقمها", ""),
  ].map(normalize).join("|");
}

function isImageKey(key) {
  return String(key || "").includes("صورة") || String(key || "").includes("توقيع");
}

function applyLocalChanges() {
  removeDeletedRows(mainRows, JSON.parse(localStorage.getItem("expertsDeletedProjectIds") || "[]").map(String));
  removeDeletedRows(accounts, JSON.parse(localStorage.getItem("expertsDeletedAccountIds") || "[]").map(String));
  const remainingPendingRecords = [];
  JSON.parse(localStorage.getItem("expertsPendingRecords") || "[]").forEach((row) => {
    ensureRecordIdentity(row);
    const existsRemotely = mainRows.some((item) => String(item._id) === String(row._id) || sameRecordKey(item, row));
    if (existsRemotely) return;
    remainingPendingRecords.push(row);
    mainRows.unshift(row);
  });
  localStorage.setItem("expertsPendingRecords", JSON.stringify(remainingPendingRecords));
  JSON.parse(localStorage.getItem("expertsPendingAccounts") || "[]").forEach((row) => {
    if (!accounts.some((item) => String(item._id) === String(row._id))) accounts.unshift(row);
  });
}

function loadRemoteDatabase(options = {}) {
  if (!DATABASE_ENDPOINT) return;
  state.syncStatus = "جاري مزامنة قاعدة البيانات...";
  const callbackName = `expertsDbCallback_${Date.now()}`;
  const script = document.createElement("script");
  const separator = DATABASE_ENDPOINT.includes("?") ? "&" : "?";

  window[callbackName] = (response) => {
    try {
      if (response?.ok && response.data) {
        const remoteMainRows = response.data["الرئيسية"] || [];
        if (remoteMainRows.length) {
          replaceRows(mainRows, prepareMainRows(mergeDuplicateRecords(withImageFallbacks(remoteMainRows))));
        }
        replaceRows(accounts, response.data["اسماء الحسابات"] || []);
        replaceRows(tasks, response.data["جدول الاعمال"] || []);
        replaceRows(agreements, response.data["اتفاقيات"] || []);
        applyLocalChanges();
        state.syncStatus = `تم تحميل ${mainRows.length} سجل من قاعدة البيانات`;
        if (options.selectKey) {
          const savedRow = mainRows.find((row) => recordMatchKey(row) === options.selectKey);
          if (savedRow) {
            state.view = "detail";
            state.selectedId = savedRow._id;
          }
        }
        render();
      } else {
        state.syncStatus = "لم يتم تحميل قاعدة البيانات. تحقق من نشر Apps Script";
        render();
      }
    } finally {
      delete window[callbackName];
      script.remove();
    }
  };

  script.onerror = () => {
    state.syncStatus = "فشل الاتصال بقاعدة البيانات";
    render();
    delete window[callbackName];
    script.remove();
  };
  script.src = `${DATABASE_ENDPOINT}${separator}action=list&callback=${encodeURIComponent(callbackName)}&t=${Date.now()}`;
  document.body.appendChild(script);
}

function bindBackupButton() {
  const button = document.querySelector("#backupImagesBtn");
  if (button) button.addEventListener("click", backupImagesToDrive);
}

function backupImagesToDrive() {
  if (!DATABASE_ENDPOINT) return;
  const button = document.querySelector("#backupImagesBtn");
  const imageMap = window.DRIVE_IMAGE_IDS || {};
  const entries = Object.entries(imageMap).map(([name, id]) => ({ name, id }));
  const confirmed = confirm(`سيتم نسخ ${entries.length} صورة إلى مجلد Drive بدون تكرار الصور الموجودة. هل تريد المتابعة؟`);
  if (!confirmed) return;

  if (button) {
    button.disabled = true;
    button.textContent = "جاري النسخ...";
  }
  state.syncStatus = `جاري نسخ ${entries.length} صورة إلى Drive...`;
  render();

  backupImageChunks(entries);
}

async function backupImageChunks(entries) {
  const chunkSize = 8;
  const totals = { copied: 0, skipped: 0, missing: 0 };

  try {
    const diagnostics = await callScriptAction("diagnostics");
    const folder = diagnostics.result?.folder || "Drive";
    const count = diagnostics.result?.imageCount ?? 0;
    state.syncStatus = `تم الاتصال بقاعدة البيانات. مجلد الصور: ${folder} (${count} صورة حاليا)`;
    render();
  } catch (error) {
    state.syncStatus = `فشل الاتصال مع Apps Script: ${error.message || "تأكد من نشر آخر نسخة"}`;
    render();
    return;
  }

  for (let index = 0; index < entries.length; index += chunkSize) {
    const chunk = entries.slice(index, index + chunkSize);
    try {
      const response = await callScriptAction("backupImagesChunk", { payload: JSON.stringify(chunk) });
      const result = response.result || {};
      totals.copied += result.copied || 0;
      totals.skipped += result.skipped || 0;
      totals.missing += result.missing || 0;
      state.syncStatus = `نسخ الصور: ${Math.min(index + chunk.length, entries.length)} / ${entries.length}`;
      render();
    } catch (error) {
      state.syncStatus = `فشل النسخ عند الصورة ${index + 1}: ${error.message || "تأكد من نشر Apps Script"}`;
      render();
      return;
    }
  }

  try {
    const linkResponse = await callScriptAction("linkImagesFromFolder");
    const linked = linkResponse.result?.linked || 0;
    state.syncStatus = `انتهى النسخ: ${totals.copied} جديد، ${totals.skipped} موجود، ${totals.missing} لم يتم الوصول له، تم ربط ${linked} خلية`;
  } catch (error) {
    state.syncStatus = `انتهى النسخ: ${totals.copied} جديد، ${totals.skipped} موجود، ${totals.missing} لم يتم الوصول له. تعذر ربط الخلايا.`;
  }
  render();
}

function callScriptAction(action, params = {}) {
  return new Promise((resolve, reject) => {
    const callbackName = `expertsActionCallback_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    const script = document.createElement("script");
    const separator = DATABASE_ENDPOINT.includes("?") ? "&" : "?";
    const search = new URLSearchParams({
      action,
      callback: callbackName,
      t: String(Date.now()),
      ...params,
    });

    window[callbackName] = (response) => {
      delete window[callbackName];
      script.remove();
      if (response?.ok) {
        resolve(response);
      } else {
        reject(new Error(response?.error || "Script action failed"));
      }
    };

    script.onerror = () => {
      delete window[callbackName];
      script.remove();
      reject(new Error("Script load failed"));
    };

    script.src = `${DATABASE_ENDPOINT}${separator}${search.toString()}`;
    document.body.appendChild(script);
  });
}

function removeById(rows, id) {
  const index = rows.findIndex((row) => String(row._id) === String(id));
  if (index >= 0) rows.splice(index, 1);
}

function rememberDeleted(storageKey, id) {
  const ids = JSON.parse(localStorage.getItem(storageKey) || "[]").map(String);
  if (!ids.includes(String(id))) ids.push(String(id));
  localStorage.setItem(storageKey, JSON.stringify(ids));
}

function removeLocalSaved(storageKey, id) {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
  localStorage.setItem(storageKey, JSON.stringify(saved.filter((row) => String(row._id) !== String(id))));
}

async function sendDelete(table, id) {
  if (!DATABASE_ENDPOINT) return;
  try {
    await fetch(DATABASE_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: "delete", table, id }),
    });
  } catch (error) {
    // Local deletion is still kept; sync can be retried after the endpoint is connected.
  }
}

function deleteProject(id) {
  if (!confirm("تأكيد الحذف: هل تريد حذف هذا السجل من الرئيسية؟")) return;
  removeById(mainRows, id);
  rememberDeleted("expertsDeletedProjectIds", id);
  removeLocalSaved("expertsPendingRecords", id);
  sendDelete("الرئيسية", id);
  state.selectedId = null;
  state.history = [];
  navigate("home", null, false);
}

function deleteAccount(id) {
  if (!confirm("تأكيد الحذف: هل تريد حذف هذا الحساب؟")) return;
  removeById(accounts, id);
  rememberDeleted("expertsDeletedAccountIds", id);
  removeLocalSaved("expertsPendingAccounts", id);
  sendDelete("اسماء الحسابات", id);
  render();
}

function bindDeleteButtons() {
  document.querySelectorAll("[data-delete-project]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteProject(button.dataset.deleteProject);
    });
  });
  document.querySelectorAll("[data-delete-account]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteAccount(button.dataset.deleteAccount);
    });
  });
}

function collectAccountForm() {
  const fields = {};
  document.querySelectorAll("[data-field]").forEach((input) => {
    fields[input.dataset.field] = input.value;
  });
  fields._id = Date.now();
  fields["الرقم"] = nextAccountNumber();
  return fields;
}

async function saveAccountForm() {
  const button = document.querySelector("#saveAccount");
  const status = document.querySelector("#formStatus");
  const fields = collectAccountForm();

  if (!value(fields, "اسم الشركة", "")) {
    if (status) status.textContent = "اكتب اسم الشركة أولا.";
    return;
  }

  if (button) button.disabled = true;
  if (status) status.textContent = "جاري حفظ الحساب...";

  saveLocalAccount(fields);
  accounts.unshift(fields);

  if (DATABASE_ENDPOINT) {
    try {
      await fetch(DATABASE_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          table: "اسماء الحسابات",
          id: fields._id,
          fields,
          files: {},
        }),
      });
      if (status) status.textContent = "تم إرسال الحساب إلى قاعدة البيانات.";
    } catch (error) {
      if (status) status.textContent = "تعذر الاتصال بقاعدة البيانات. تم حفظ نسخة مؤقتة على الهاتف.";
    }
  } else if (status) {
    status.textContent = "تم حفظ الحساب على الهاتف مؤقتا.";
  }

  window.setTimeout(() => navigate("accounts", null, false), 700);
}

function saveLocalAccount(row) {
  const saved = JSON.parse(localStorage.getItem("expertsPendingAccounts") || "[]");
  const next = saved.filter((item) => String(item._id) !== String(row._id));
  next.push(row);
  localStorage.setItem("expertsPendingAccounts", JSON.stringify(next));
}

function nextAccountNumber() {
  const numbers = accounts.map((row) => Number(value(row, "الرقم", 0))).filter(Number.isFinite);
  return (numbers.length ? Math.max(...numbers) : 0) + 1;
}

function renderTasks() {
  const rows = filteredRows(tasks, ["المهمة", "الحالة", "ملاحظات"]);
  app.innerHTML = searchBox() + `<section class="list">${rows.map((row) => `
    <article class="task-card">
      <div class="task-top">
        <h2>${escapeHtml(value(row, "المهمة"))}</h2>
        <span class="chip ${value(row, "الحالة") === "فعال" ? "warn" : "ok"}">${escapeHtml(value(row, "الحالة"))}</span>
      </div>
      <div class="meta">${escapeHtml(value(row, "التاريخ"))}<br>${escapeHtml(value(row, "ملاحظات"))}</div>
    </article>
  `).join("") || empty()}</section>`;
  bindSearch();
}

function renderAgreements() {
  const rows = filteredRows(agreements, ["اسم العميل", "نسخة الاتفاقية"]);
  app.innerHTML = searchBox() + `<section class="list">${rows.map((row) => `
    <article class="task-card">
      <div class="task-top">
        <h2>${escapeHtml(value(row, "اسم العميل"))}</h2>
        <span class="chip">PDF</span>
      </div>
      <div class="meta">${escapeHtml(fileLabel(value(row, "نسخة الاتفاقية", "")))}</div>
      <div class="actions"><button class="secondary">عرض الملف</button><button class="primary">مشاركة</button></div>
    </article>
  `).join("") || empty()}</section>`;
  bindSearch();
}

function renderAccounts() {
  const rows = filteredRows(accounts, ["اسم الشركة", "الشخص المسؤول", "المهندس المقيم", "الفني"]);
  app.innerHTML = searchBox() + `<section class="list">${rows.map((row) => `
    <article class="account-card">
      <h2>${escapeHtml(value(row, "اسم الشركة"))}</h2>
      <div class="meta">
        المسؤول: ${escapeHtml(value(row, "الشخص المسؤول"))}<br>
        المهندس المقيم: ${escapeHtml(value(row, "المهندس المقيم"))}<br>
        الفني: ${escapeHtml(value(row, "الفني"))}
      </div>
      <div class="chips">
        <span class="chip">#${escapeHtml(value(row, "الرقم"))}</span>
        <span class="chip">جهة اتصال</span>
      </div>
      <div class="card-actions">
        <button class="danger small-action" type="button" data-delete-account="${row._id}">حذف</button>
      </div>
    </article>
  `).join("") || empty()}</section>`;
  bindSearch();
  bindDeleteButtons();
}

function render() {
  try {
    setHeader();
    switch (state.view) {
      case "projects":
        renderProjects();
        break;
      case "projectRecords":
        renderProjectRecords();
        break;
      case "detail":
        renderDetail();
        break;
      case "form":
        renderForm();
        break;
      case "accountForm":
        renderAccountForm();
        break;
      case "report":
        renderReport();
        break;
      case "tasks":
        renderTasks();
        break;
      case "agreements":
        renderAgreements();
        break;
      case "accounts":
        renderAccounts();
        break;
      case "home":
      default:
        renderHome();
        break;
    }
  } catch (error) {
    app.innerHTML = `<div class="empty">حدث خطأ في فتح هذه الصفحة: ${escapeHtml(error.message || error)}</div>`;
  }
}

function bindSearch() {
  const input = document.querySelector("#searchInput");
  if (!input) return;
  input.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
    const next = document.querySelector("#searchInput");
    if (next) {
      next.focus();
      next.setSelectionRange(next.value.length, next.value.length);
    }
  });
  const accountSelect = document.querySelector("#accountSearchSelect");
  accountSelect?.addEventListener("change", (event) => {
    state.query = event.target.value;
    state.searchOpen = true;
    render();
  });
}

function accountSearchNames() {
  return unique(accounts, "اسم الشركة").slice(0, 80);
}

function allCompanyNames() {
  return [...new Set([...unique(accounts, "اسم الشركة"), ...unique(mainRows, "اسم الشركة")])].filter(Boolean).slice(0, 120);
}

function info(label, text) {
  return `<div class="info-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(text)}</strong></div>`;
}

function field(label, current, type = "text", options = []) {
  if (type === "select") {
    const choices = [...new Set(options.filter(Boolean))];
    return `<div class="field"><label>${escapeHtml(label)}</label><select data-field="${escapeHtml(label)}"><option value="">اختر ${escapeHtml(label)}</option>${choices.map((option) => `<option value="${escapeHtml(option)}" ${option === current ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select></div>`;
  }
  return `<div class="field"><label>${escapeHtml(label)}</label><input data-field="${escapeHtml(label)}" type="${type}" value="${escapeHtml(current)}"></div>`;
}

function area(label, current) {
  return `<div class="field"><label>${escapeHtml(label)}</label><textarea data-field="${escapeHtml(label)}">${escapeHtml(current)}</textarea></div>`;
}

function imageField(label, id) {
  return `
    <div class="field image-field" data-image-field="${escapeHtml(label)}">
      <label>${escapeHtml(label)}</label>
      <div class="image-preview">
        <span>لم يتم اختيار صورة</span>
      </div>
      <div class="image-actions">
        <label class="secondary image-button" for="${id}Gallery">اختيار من المعرض</label>
        <label class="primary image-button" for="${id}Camera">التقاط صورة</label>
      </div>
      <div class="image-file-name">اختر صورة أو التقط صورة بالكاميرا</div>
      <input id="${id}Gallery" data-source="gallery" class="visually-hidden-file" type="file" accept="image/*">
      <input id="${id}Camera" data-source="camera" class="visually-hidden-file" type="file" accept="image/*" capture="environment">
    </div>
  `;
}

function unique(rows, key) {
  return [...new Set(rows.map((row) => value(row, key, "")).filter(Boolean))].slice(0, 40);
}

function fileLabel(path) {
  if (!path) return "-";
  if (!String(path).includes("/") && /_\d{8}T\d{6}\./.test(String(path))) return "بانتظار تحديث الصورة من Drive";
  return String(path).split("/").pop();
}

function appSheetImageUrl(path) {
  if (!path || path === "-") return "";
  if (/^data:image\//i.test(path) || /^blob:/i.test(path)) return path;
  if (/^https?:\/\//i.test(path)) {
    const driveMatch = String(path).match(/\/d\/([^/]+)|[?&]id=([^&]+)/);
    const driveId = driveMatch?.[1] || driveMatch?.[2];
    if (driveId && !String(path).includes("thumbnail")) {
      return `https://drive.google.com/thumbnail?id=${encodeURIComponent(driveId)}&sz=w1200`;
    }
    return path;
  }
  if (!String(path).includes("/") && /_\d{8}T\d{6}\./.test(String(path))) return "";
  const fileName = fileLabel(path);
  const driveId = window.DRIVE_IMAGE_IDS?.[fileName];
  if (driveId) return `https://drive.google.com/thumbnail?id=${encodeURIComponent(driveId)}&sz=w1200`;
  if (SIGNED_IMAGE_URLS[path]) return SIGNED_IMAGE_URLS[path];
  const params = new URLSearchParams({
    appName: APPSHEET_APP_NAME,
    tableName: APPSHEET_MAIN_TABLE,
    fileName: String(path),
    appVersion: APPSHEET_APP_VERSION,
  });
  return `https://www.appsheet.com/image/getimageurl?${params.toString()}`;
}

function empty() {
  return `<div class="empty">لا توجد بيانات مطابقة</div>`;
}

function escapeHtml(input) {
  return String(input ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

backBtn.addEventListener("click", goBack);
searchBtn.addEventListener("click", () => {
  state.searchOpen = !state.searchOpen;
  render();
  document.querySelector("#searchInput")?.focus();
});

addBtn.addEventListener("click", () => {
  if (state.view === "accounts") {
    navigate("accountForm", null);
    return;
  }
  navigate("form", null);
});

document.querySelector(".bottom-nav")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-view]");
  if (!button) return;
  state.query = "";
  navigate(button.dataset.view);
});

app.addEventListener("click", (event) => {
  const card = event.target.closest(".record-card");
  if (!card || state.view !== "home") return;
  navigate("detail", card.dataset.id);
});

render();
loadRemoteDatabase();
