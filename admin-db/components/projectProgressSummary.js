import summary from "../../jsons/Project_Progress_Summary.json" assert {type: 'json'};

export default {
    data: () =>({
        summaryData : summary.project_progress_summary,
        colorsArr : ["red", 'blue', 'green', 'yellow'],
        widthPer: ["25%", "65%","85%", "45%"]
    }),
    methods: {
        checkColor(percentage){
            let cls = (percentage.includes("-")? false : true )
            return cls
        },
        getBgColor(index){
            return ("progress-bar bg-c-"+ this.colorsArr[index])
        },
        getWidth(index){
            return "width:"+this.widthPer[index]
        }
    },
    template: `
    <div class="col-xl-12">
        <div class="card proj-progress-card">
            <div class="card-block">
                <div class="row">
                    <div class="col-xl-3 col-md-6" v-for="(summary,index) in summaryData" :key="summary.title">
                        <h6>{{summary.title}}</h6>
                        <h5 class="m-b-30 f-w-700">{{summary.value}}<span :class="[checkColor(summary.percentage) ? 'text-c-green m-l-10' : 'text-c-red m-l-10']">{{summary.percentage}}</span></h5>
                        <div class="progress">
                            <div :class="getBgColor(index)" :style="getWidth(index)"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    `
}