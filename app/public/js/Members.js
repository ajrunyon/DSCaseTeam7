var Membersapp = new Vue({
  el: '#Membersapp',
  data: {
    Members: [],
    recordMembers: {},
  },
  methods: {
fetchMembers() {
  fetch('api/memberrecords/')
  .then(response => response.json())
  .then(json => { Membersapp.Members = json })
},
handleSubmit(event) {
  // fetch(url, {
  //   method: 'post',
  //   data: this.recordPatient
  // })
  // .then( ... )
  fetch('api/memberrecords/post.php', {
    method:'POST',
    body: JSON.stringify(this.recordMembers),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then( response => response.json() )

.then( json => { Membersapp.Members.push(json[0])})

.catch( err => {
  console.error('WORK GENMEM ERROR:');
  console.error(err);
});
  this.handleReset();
},
handleReset() {
  this.recordMembers = {
    memberID: '',
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    workphone: '',
    mobilephone: '',
    radioNum: '',
    station: ''
  }
    },
    handleDelete(cid) {
          fetch('api/certificationrecords/delete.php', {
            method:'POST',
            body: JSON.stringify({"memberID":cid}),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( function(response) {
              generalcertificationsapp.Certifications = generalcertificationsapp.Certifications.filter(
                function(el) {return el.memberID != cid}
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
  this.fetchMembers();
}
});
