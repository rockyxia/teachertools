Page({
  data: {},
  onLoad() {},
  callPhone: function(e) {
    const phone = e.target.dataset.phone
    my.makePhoneCall({ number: phone })
  },
});
