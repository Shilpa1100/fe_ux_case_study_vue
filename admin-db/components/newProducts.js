import newData from "../../jsons/New_Products.json" assert {type: 'json'};

export default {
    data: () => ({
        newProductsData : newData.new_products 
    }),
    methods:{
        checkStatus(value){
            let statusValue= (value == "In Stock") ?  true : false
            return  statusValue
        }
    },
    template: `
    <div class="col-md-12">
        <div class="card table-card">
            <div class="card-header">
                <h5>New Products</h5>
                <div class="card-header-right">
                    <ul class="list-unstyled card-option">
                        <li class="first-opt"><i class="feather icon-chevron-left open-card-option"></i></li>
                        <li><i class="feather icon-maximize full-card"></i></li>
                        <li><i class="feather icon-minus minimize-card"></i></li>
                        <li><i class="feather icon-refresh-cw reload-card"></i></li>
                        <li><i class="feather icon-trash close-card"></i></li>
                        <li><i class="feather icon-chevron-left open-card-option"></i></li>
                    </ul>
                </div>
            </div>
            <div class="card-block p-b-0">
                <div class="table-responsive">
                    <table class="table table-hover m-b-0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Product Code</th>
                                <th>Customer</th>
                                <th>Status</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="newProduct in newProductsData" :key="newProduct.name">
                                <td>{{newProduct.name}}</td>
                                <td>{{newProduct.product_code}}</td>
                                <td>{{newProduct.customer}}</td>
                                <td><label :class="[ checkStatus(newProduct.status)? 'label label-success' : 'label label-danger']">{{newProduct.status}}</label></td>
                                <td v-for="n in newProduct.rating" :key="n" >
                                    <a href="#!"><i class="fa fa-star f-12 text-c-yellow"></i></a>
                                </td>
                                <td v-for="m in (5-newProduct.rating)" :key="m" >
                                    <a href="#!"><i class="fa fa-star f-12 text-default"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    `
}