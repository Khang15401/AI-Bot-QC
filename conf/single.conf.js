LT_USERNAME = process.env.LT_USERNAME || "akhang147";
LT_ACCESS_KEY =
  process.env.LT_ACCESS_KEY ||
  "c5rb3GfJA9WiMgkRK2j4tmuo9phwBbFeU29MgbtxA8QkbCCgXF";

// exports.capabilities = {
//   browserName: "Chrome",
//   browserVersion: "latest",
//   "LT:Options": {
//     username: "akhang147",
//     accessKey: "c5rb3GfJA9WiMgkRK2j4tmuo9phwBbFeU29MgbtxA8QkbCCgXF",
//     visual: true,
//     platformName: "Windows 10",
//     project: "TestUI",
//     smartUI: {
//       project: "SOLX",
//     },
//     console: "error",
//     w3c: true,
//     plugin: "mocha-mocha",
//   },
// };


exports.capabilities = {
	"browserName": "Chrome",
	"browserVersion": "latest",  // Sử dụng "latest" để chọn phiên bản mới nhất
	"LT:Options": {
	  "username": "akhang147",
	  "accessKey": "c5rb3GfJA9WiMgkRK2j4tmuo9phwBbFeU29MgbtxA8QkbCCgXF",
	  "visual": true,  // Kích hoạt tính năng SmartUI
	  "platformName": "Windows 10",
	  "project": "TestUI",  // Tên dự án chung
	  "smartUI.project": "SOLX",  // Tên dự án SmartUI (đúng cú pháp)
	  "console": "error",
	  "w3c": true,
	  "plugin": "nodejs-mocha"
	}
  };