var generalcertificationsapp = new Vue({
  el: '#generalcertificationsapp',
  data: {
    Certifications: [],
//    recordCertifications: {},
  },
  methods: {
    fetchCertifications() {
  fetch('dummy.php')
  .then(response => response.json())
  .then(json => { generalcertificationsapp.Certifications = json })
},
//    handleRowClick(certifications) {
//  generalcertificationsApp.Certifications = certifications;
//}
  },
  created() {
//  this.handleReset();
  this.fetchCertifications();
}
});
