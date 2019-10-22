var MemberReportapp = new Vue({
  el: '#MemberReportapp',
  data: {
    Members: []
//    recordCertifications: {},
  },
  methods: {
fetchMembers() {
  fetch('api/memberrecords/index.php')
  .then(response => response.json())
  .then(json => { MemberReportapp.Members = json })
},
//'api/memberrecords/index.php'
//handleSubmit(event) {
  // fetch(url, {
  //   method: 'post',
  //   data: this.recordPatient
  // })
  // .then( ... )
//  fetch('api/certificationrecords/post.php', {
//    method:'POST',
//    body: JSON.stringify(this.recordCertifications),
//    headers: {
//      "Content-Type": "application/json; charset=utf-8"
//    }
//   })
//  .then( response => response.json() )
//  .then( json => { waitingApp.Certifications = json})
//.catch( err => {
  //console.error('WORK GENCERT ERROR:');
  //console.error(err);
//})
  //this.Certifications.push( this.recordCertifications );
//  this.handleReset();
// },
// handleReset() {
//  this.recordCertifications = {
//    certID: '',
//    agency: '',
//    certname: '',
//    expires: ''
//  }
//    },


//    handleRowClick(certifications) {
//  generalcertificationsApp.Certifications = certifications;
//}
},
  created() {
//  this.handleReset();
  this.fetchMembers();
}
});
