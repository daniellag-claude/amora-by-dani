// Shop order builder — tallies chosen scents and opens a pre-filled WhatsApp order.
(function () {
  var WHATSAPP = "27836553095";
  var rows = document.querySelectorAll(".qty");
  var summaryEl = document.getElementById("orderSummary");
  var btnEl = document.getElementById("orderBtn");
  if (!rows.length || !summaryEl || !btnEl) return;

  var counts = {};

  function update() {
    var lines = [];
    var total = 0;
    var items = 0;
    rows.forEach(function (row) {
      var name = row.getAttribute("data-name");
      var price = parseInt(row.getAttribute("data-price"), 10);
      var qty = counts[name] || 0;
      if (qty > 0) {
        var lineTotal = qty * price;
        total += lineTotal;
        items += qty;
        lines.push("- " + qty + "x " + name + " (R" + lineTotal + ")");
      }
    });

    if (items === 0) {
      summaryEl.textContent = "Pick your scents above and I will pop them straight into a WhatsApp message.";
      btnEl.setAttribute("aria-disabled", "true");
      btnEl.removeAttribute("href");
      return;
    }

    summaryEl.textContent = "Your order:\n" + lines.join("\n") + "\nTotal: R" + total;
    var msg = "Hi Dani! I would love to order from Amora By Dani:\n" + lines.join("\n") + "\nTotal: R" + total;
    btnEl.setAttribute("href", "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg));
    btnEl.setAttribute("aria-disabled", "false");
  }

  rows.forEach(function (row) {
    var name = row.getAttribute("data-name");
    counts[name] = 0;
    var val = row.querySelector(".qval");
    row.querySelector(".plus").addEventListener("click", function () {
      counts[name]++;
      val.textContent = counts[name];
      update();
    });
    row.querySelector(".minus").addEventListener("click", function () {
      if (counts[name] > 0) counts[name]--;
      val.textContent = counts[name];
      update();
    });
  });

  update();
})();
