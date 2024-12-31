
const { createApp } = Vue
const app = createApp()

app.component("display-here",
    {
        components: {
			paginate: VuejsPaginateNext,
	},

    data: function() {
        return {
          perPage: 5,
            currentPage: 1,
            fUnit: {
                code: "",
                desc: "",
                cp: "",
                type: "",
              },
              units: [],
        };
    },

      template: 
      `
      <div class="row">
    <div class="col-md-12">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" id="code">Code</th>
              <th scope="col" id="desc">Description</th>
              <th scope="col" id="cp">cp</th>
              <th scope="col" id="type">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="unit in getItems" :key="unit.code">
              <td headers="code">{{ unit.code }}</td>
              <td headers="des">{{ unit.desc }}</td>
              <td headers="cp">{{ unit.cp }}</td>
              <td headers="type">{{ unit.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
 
  <div class="row">
    <div class="col-md-12">
      <paginate
        :page-count="getPageCount"
        :page-range="5"
        :margin-pages="1"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      ></paginate>
    </div>
  </div>
      
      `,

 	
      mounted() { //Called after the instance has been mounted
        var self = this;
        var url = "units.json";
       
  
        fetch(url)     //javascript fetch api  
        .then( response =>{
          //turning the response into the usable data
          return response.json( );
        })
        .then( data =>{
          //This is the data you wanted to get from url
          self.units=data;
        })
        .catch(error => {
          self.err=error
        });
       
        },


      computed: {
        filteredUnits: function () {
          return this.units.filter(
            (unit) =>
              unit.code.toLowerCase().match(this.fUnit.code.toLowerCase()) &&
              unit.desc.toLowerCase().match(this.fUnit.desc.toLowerCase()) &&
              unit.type.match(this.fUnit.type.trim())
          );
        },

        getItems: function() {
            let current = this.currentPage *5;
            let start = current -5;

            return this.units.slice(start, current);
        },

        getPageCount: function () {
          return Math.ceil(this.filteredUnits.length / this.perPage);
        },

    },

    methods: {
		//sets the clicked page
		clickCallback: function(pageNum) {
			this.currentPage = Number(pageNum);
		}
    }




    });
    app.mount('#app')