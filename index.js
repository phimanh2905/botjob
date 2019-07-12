const mailer = require("nodemailer");
const axios = require("axios");
const cherrio = require("cheerio");
const request = require("request");
const fs = require("fs");

const init = crawler();

function crawler() {
  const URIXNK =
    "https://careerbuilder.vn/viec-lam/xuat-nhap-khau-tai-ha-noi-c18l4-vi.html";
  request(URIXNK, (err, res, body) => {
    let $ = cherrio.load(body);
    debugger;
  });
}
