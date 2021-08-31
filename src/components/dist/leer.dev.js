"use strict";

var _firebase = require("../firebase");

var tabla = document.getElementById('tabla');

_firebase.db.collection("disenador").onSnapshot(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
    console.log("".concat(doc.id, " => ").concat(doc.data().nombre));
    tabla.innerHTML += "<tr>\n        <td> ".concat(doc.id, " </td>\n        <td>").concat(doc.data().nombre, "</td>\n        <td>").concat(doc.data().pais, "</td>\n        </tr>");
  });
});