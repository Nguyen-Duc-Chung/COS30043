    var studMarks = [
        {"name": "Lukas", "mark": 90, },
        {"name": "Hannah", "mark": 80, },
        {"name": "Leon", "mark": 78, },
        {"name": "Emma", "mark": 84, },
        {"name": "Finn", "mark": 91, },
        {"name": "Sophia", "mark": 75},
        {"name": "Jonas", "mark": 89},
        {"name": "Mia", "mark": 82},
        {"name": "Ben", "mark": 88},
        {"name": "Lina", "mark": 85},
        {"name": "Noah", "mark": 92},
        {"name": "Anna", "mark": 79},
        {"name": "Felix", "mark": 81},
        {"name": "Lea", "mark": 87},
        {"name": "Paul", "mark": 83},
        {"name": "Marie", "mark": 77},
        {"name": "Max", "mark": 90},
        {"name": "Clara", "mark": 86},
        {"name": "Elias", "mark": 88,},
        {"name": "Emily", "mark": 84, },
        {"name": "Julian", "mark": 85,},
        {"name": "Laura", "mark": 91,},
        {"name": "Tim", "mark": 76, },
        {"name": "Lara", "mark": 89, },
        {"name": "Moritz", "mark": 78, },
        {"name": "Nina", "mark": 80, }
    ];
    

const { createApp } = Vue

const app = createApp()


app.component('student-marks',
    {
        components: {
            paginate: VuejsPaginateNext,
        },
        
        data: function() {
            return {
                currentPage: 1,
                student: studMarks
            }
        },
        
        template: `

        <div class="container">
			<h1>Student Marks</h1>
		</div>
		
		 <div class="container">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" id="StudentName" >Student Name</th>
                            <th scope="col" id="Marks">Marks</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr  v-for="stu in getItems">
                           <td header="StudentName" >{{ stu.name }}</td>
					       <td header="Marks">{{ stu.mark }}</td>
                        </tr>
                    </tbody>
                </table>

				<!-- Vue Paginate template -->
	<paginate 
		:page-count="9"    
		:page-range="6" 
		:margin-pages="1"
		:click-handler="clickCallback" 
		:prev-text=" 'Prev Page' " 		
		:next-text="'Next Page'" 
		:container-class="'pagination'" 
		:active-class="'currentPage'"
		>
	</paginate>

            </div>
        </div>
    
    `,

    computed: {
        getItems: function() {
            let current = this.currentPage *3;
            let start = current -3;

            return this.student.slice(start, current);
        }
    },

    methods: {
		//sets the clicked page
		clickCallback: function(pageNum) {
			this.currentPage = Number(pageNum);
		}
    }

        
    });
    app.mount('#app')


//     <div>
//     <h1>Student Marks</h1>
    
//     <v-table>
//         <thead>
//             <tr>
//                 <th scope="col" id="studentname" >Student Name</th>
//                 <th scope="col" id="Marks" >Marks</th>
                
//             </tr>
//         </thead>
//         <tbody>
//             <tr v-for="stu in getItems" >
               
//                 <td>{{ stu.name }}</td>
//                 <td>{{ stu.mark }}</td>
                
//             </tr>
//         </tbody>
//     </v-table>
    
//     <!-- Vue Paginate template -->
// <paginate 
//     :page-count="9"    
//     :page-range="6" 
//     :margin-pages="1"
//     :click-handler="clickCallback" 
//     :prev-text=" 'Prev Page' " 		
//     :next-text="'Next Page'" 
//     :container-class="'pagination'" 
//     :active-class="'currentPage'"
//     >
// </paginate>

// </div>