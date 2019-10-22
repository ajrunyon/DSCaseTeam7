var Membersapp = new Vue({
  el: '#Membersapp',
  data: {
    Members: [],
    recordMembers: {},
  },
  methods: {
    fetchMembers() {
  fetch('api/certificationrecords/index.php')
  .then(response => response.json())
  .then(json => { Membersapp.Members = json })
},
handleSubmit(event) {
  // fetch(url, {
  //   method: 'post',
  //   data: this.recordPatient
  // })
  // .then( ... )
  fetch('api/certificationrecords/post.php', {
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
  this.handleReset();
  this.fetchMembers();
}
});
