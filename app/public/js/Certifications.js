var generalcertifications = new Vue({
  el: '#generalcertificationsApp',
  data: {
    Certifications: [],
    recordCertifications: {},
  },
  methods: {
    fetchPatients() {
  fetch('public/dummy.php')
  .then(response => response.json())
  .then(json => { generalcertificationsApp.Certifications = json })
},
    handleRowClick(patient) {
  generalcertificationsApp.patient = patient;
}
  },
  created() {
  this.handleReset();
  this.fetchCertifications();
}
});
