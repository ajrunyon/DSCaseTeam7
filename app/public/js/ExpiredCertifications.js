var expiredcertificationsapp = new Vue({
  el: '#expiredcertificationsapp',
  data: {
    expiredCertifications: [],
    filter:{
      expcertName:''
  }
  },
methods: {
  fetchCertifications() {
    fetch('api/expiredcertbymember/index.php')
      .then(response => response.json())
      .then(json => { expiredcertificationsapp.expiredCertifications = json })
},

  },
//handleSubmit(event) {
  // fetch(url, {
  //   method: 'post',
  //   data: this.recordPatient
  // })
  // .then( ... )
  //fetch('api/certificationrecords/post.php', {
  //  method:'POST',
  //  body: JSON.stringify(this.recordCertifications),
  //  headers: {
  //    "Content-Type": "application/json; charset=utf-8"
  //  }
//  })
//  .then( response => response.json() )
//  .then( json => { waitingApp.Certifications = json})
//.catch( err => {
  //console.error('WORK GENCERT ERROR:');
  //console.error(err);
//})
  //this.Certifications.push( this.recordCertifications );
//  this.handleReset();
//},
//handleReset() {
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
  created() {
//  this.handleReset();
  this.fetchCertifications();
}
});
