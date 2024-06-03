import summary from "../../jsons/summary.json" assert {type: 'json'};

export default {
    data: () =>({
        summaryData : summary.summary,
        colorsArr : ['blue', 'green', 'yellow'] 
    }),
    methods: {
        getTextColor(index){
            return ("f-w-700 text-c-"+ this.colorsArr[index])
        },
        getBgColor(index){
            return ("fas fa-eye bg-c-"+ this.colorsArr[index])
        }
    },
    template: `
    <div class="col-md-12 col-xl-4" style="display:inline-block">
        <div class="card comp-card" v-for="(summary,index) in summaryData" :key="summary.title">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col">
                        <h6 class="m-b-25">{{summary.title}}</h6>
                        <h3 :class="getTextColor(index)">{{summary.value}}</h3>
                        <p class="m-b-0">{{summary.duration}}({{summary.year}})</p>
                    </div>
                    <div class="col-auto">
                        <i :class="getBgColor(index)"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}