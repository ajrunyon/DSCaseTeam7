var generalcertificationsapp = new Vue({
  el: '#generalcertificationsapp',
  data: {
    Certifications: [],
    recordCertifications: {},
  },
  methods: {
    fetchCertifications() {
  fetch('dummy.php')
  .then(response => response.json())
  .then(json => { generalcertificationsapp.Certifications = json })
},
handleSubmit(event) {
  // fetch(url, {
  //   method: 'post',
  //   data: this.recordPatient
  // })
  // .then( ... )
  this.Certifications.push( this.recordCertifications );
  this.handleReset();
},
handleReset() {
  this.recordCertifications = {
    certID: '',
    agency: '',
    certname: '',
    expires: ''
  }
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
