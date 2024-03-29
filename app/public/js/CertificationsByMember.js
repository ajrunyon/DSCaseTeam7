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
    memberID: '',
    datecertified:'',
    expirationDate:'',
  }
    },
    handleDelete(cid) {
          fetch('api/certBYmember/delete.php', {
            method:'POST',
            body: JSON.stringify({"certID":cid}),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( function(response) {
              certificationsbymemberapp.CertificationsByMember = certificationsbymemberapp.CertificationsByMember.filter(
                function(el) {return el.certID != cid}
              );
          })
        .catch( err => {
          console.error('WORK GENCERTBYMEMDEL ERROR:');
          console.error(err);
        });
          //this.Certifications.push( this.recordCertifications );
          this.handleReset();
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
