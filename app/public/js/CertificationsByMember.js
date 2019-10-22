var certificationsbymemberapp = new Vue({
  el: '#certificationsbymemberapp',
  data: {
    CertificationsByMember: [],
    recordCertificationsByMember: {},
  },
  methods: {
    fetchCertifications() {
  fetch('api/certBYmember/index.php')
  .then(response => response.json())
  .then(json => { certificationsbymemberapp.CertificationsByMember = json })
},
handleSubmit(event) {
  // fetch(url, {
  //   method: 'post',
  //   data: this.recordPatient
  // })
  // .then( ... )
  fetch('api/certBYmember/post.php', {
    method:'POST',
    body: JSON.stringify(this.recordCertificationsByMember),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then( response => response.json() )
  .then( json => { certificationsbymemberapp.CertificationsByMember.push(json[0])})
//.catch( err => {
  //console.error('WORK GENCERT ERROR:');
  //console.error(err);
//})
  //this.Certifications.push( this.recordCertifications );
  this.handleReset();
},
handleReset() {
  this.recordCertificationsByMember = {
    certID: '',
    memberID: ''
  }
    },


//    handleRowClick(certifications) {
//  generalcertificationsApp.Certifications = certifications;
//}
  },
  created() {
  this.handleReset();
  this.fetchCertifications();
}
});
