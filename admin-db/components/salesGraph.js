export default{
    template: `<div class="col-md-12 col-xl-4" style="display:inline-block">
    <div class="card card-blue text-white">
        <div class="card-block p-b-0">
            <div class="row m-b-50">
                <div class="col">
                    <h6 class="m-b-5">Sales In July</h6>
                    <h5 class="m-b-0 f-w-700">$2665.00</h5>
                </div>
                <div class="col-auto text-center">
                    <p class="m-b-5">Direct Sale</p>
                    <h6 class="m-b-0">$1768</h6>
                </div>
                <div class="col-auto text-center">
                    <p class="m-b-5">Referal</p>
                    <h6 class="m-b-0">$897</h6>
                </div>
            </div>
            <div id="sec-ecommerce-chart-line" class="" style="height: 60px; padding: 0px; position: relative;">
                <canvas class="flot-base" width="367" height="60" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 60px;"></canvas>
                <div class="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                    <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px;">
                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 8px; text-align: center;">0.0</div>
                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 71px; text-align: center;">2.5</div>
                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 133px; text-align: center;">5.0</div>
                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 196px; text-align: center;">7.5</div>
                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 259px; text-align: center;">
                            10.0
                        </div>
                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 321px; text-align: center;">
                            12.5
                        </div>
                    </div>
                    <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; inset: 0px;">
                        <div style="position: absolute; top: 52px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">0</div>
                        <div style="position: absolute; top: 37px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">10</div>
                        <div style="position: absolute; top: 23px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">20</div>
                        <div style="position: absolute; top: 8px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">30</div>
                    </div>
                </div>
                <canvas class="flot-overlay" width="367" height="60" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 60px;"></canvas>
            </div>
            <div id="sec-ecommerce-chart-bar" style="height: 195px; padding: 0px; position: relative;">
                <canvas class="flot-base" width="367" height="195" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 195px;"></canvas>
                <div class="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                    <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px;">
                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 8px; text-align: center;">0.0</div>
                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 70px; text-align: center;">2.5</div>
                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 133px; text-align: center;">
                            5.0
                        </div>
                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 196px; text-align: center;">
                            7.5
                        </div>
                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 259px; text-align: center;">
                            10.0
                        </div>
                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 322px; text-align: center;">
                            12.5
                        </div>
                    </div>
                    <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; inset: 0px;">
                        <div style="position: absolute; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">0</div>
                        <div style="position: absolute; top: 163px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">5</div>
                        <div style="position: absolute; top: 130px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">10</div>
                        <div style="position: absolute; top: 98px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">15</div>
                        <div style="position: absolute; top: 65px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">20</div>
                        <div style="position: absolute; top: 33px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">25</div>
                        <div style="position: absolute; top: 0px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">30</div>
                    </div>
                </div>
                <canvas class="flot-overlay" width="367" height="195" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 195px;"></canvas>
            </div>
        </div>
    </div>
</div>`
}