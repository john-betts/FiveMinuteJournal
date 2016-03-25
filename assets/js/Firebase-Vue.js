Vue.validator('email', function (val/*,rule*/) {
      return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
});

var myURL = 'https://dazzling-torch-1318.firebaseio.com/'

var Users = new Firebase(myURL + 'users')

Users.on('child_added', function (snapshot) {
var item = snapshot.val()
item.id = snapshot.key()
})





new Vue({
    el: '#app',
    data: {
        name: '',
        address: '',
        password: ''
    },
    methods: {
        submit: function() {
            Users.push({
                name: this.name,
                email: this.address,
                password: this.password
            });
            this.name = '';
            this.address = '';
            this.password = '';
        }
    }


})
