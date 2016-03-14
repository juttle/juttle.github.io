
// $('.nav-tabs.juttle-service a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// });

$('.nav-tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$("#log-example-adapter").typed({
  strings: ["elastic", "file", "splunk"],
  loop: true,
  showCursor: false,
  typeSpeed: 0,
  backDelay: 2000
});

$("#moving-average-example-adapter").typed({
  strings: ["influx", "graphite", "opentsdb"],
  loop: true,
  showCursor: false,
  typeSpeed: 0,
  backDelay: 2000
});
