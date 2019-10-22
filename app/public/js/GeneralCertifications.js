var generalcertificationsapp = new Vue({
  el: '#generalcertificationsapp',
  data: {
    Certifications: [],
    recordCertifications: {}
  },
  methods: {
    fetchCertifications() {
  fetch('api/certificationrecords/')
  .then(response => response.json())
  .then(json => { generalcertificationsapp.Certifications = json })
},
handleSubmit(event) {
  // fetch(url, {
  //   method: 'post',
  //   data: this.recordPatient
  // })
  // .then( ... )
  fetch('api/certificationrecords/post.php', {
    method:'POST',
    body: JSON.stringify(this.recordCertifications),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then( response => response.json() )

.then( json => { generalcertificationsapp.Certifications.push(json[0])})

.catch( err => {
  console.error('WORK GENCERT ERROR:');
  console.error(err);
});
  //this.Certifications.push( this.recordCertifications );
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
handleDelete(cid) {
      fetch('api/certificationrecords/delete.php', {
        method:'POST',
        body: JSON.stringify({"certID":cid}),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( function(response) {
          generalcertificationsapp.Certifications = generalcertificationsapp.Certifications.filter(
            function(el) {return el.certID != cid}
          );
      })
    .catch( err => {
      console.error('WORK GENCERTDEL ERROR:');
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
