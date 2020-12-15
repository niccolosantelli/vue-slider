let app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    images:[
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
      "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
    ]
  },

  methods: {
    nextImg(){
      this.counter++;
      if(this.counter == this.images.length){
        this.counter = 0;
      }
    },
    prevImg(){
      if(this.counter > 0){
        this.counter--
      } else {
        this.counter = this.images.length -1 ;
      }
    }

  }








})


/*<img class="active first" src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg" alt="">
<img src="https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg" alt="">
<img src="https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg" alt="">
<img class="last" src="https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg" alt="">*/
