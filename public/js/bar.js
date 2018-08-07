    $(document).ready(function(){
        var barManager = {
            data : [],
            viewBar : function(){
                var listBar = this.data;

                $("#bar-product").empty();
                var showHead = '<tr>' +
                                    '<th colspan="2">Tên sản phẩm</th>'+
                                    '<th>Màu sắc</th>'+
                                    '<th>Giá tiền</th>'+
                                    '<th>Số lượng</th>'+
                                    '<th>Tổng</th>'+
                                '</tr>';
                $("#bar-product").append(showHead);
                for(var i = 0; i<listBar.length; i++){
                    var showInfo = '<tr>'+
                                        '<td class="table-middle"><div class="img-product-bar" style="background: url('+listBar[i].imgCover+') no-repeat; background-position: 50% 50%; background-size: cover;"></div></td>'+
                                        '<td class="table-middle">'+listBar[i].name+'</td>'+
                                        '<td class="table-middle">'+listBar[i].color+'</td>'+
                                        '<td class="table-middle">'+
                                            '<input type="text" style="display: none" name="name['+listBar[i].id+']" value="'+listBar[i].price+'" disabled="disabled">'+
                                            '<span class="displayPrice">'+listBar[i].price+'</span><span>&nbsp;VND</span>'+
                                        '</td>'+
                                        '<td class="table-middle tb-munber">'+
                                            '<div class="input-group">'+
                                                '<div class="input-group-prepend">'+
                                                    '<button class="btn btn-outline-secondary btn-number" type="button" data-type="minus" data-field="['+listBar[i].id+']"><b>-</b></button>'+  
                                                '</div>'+
                                                '<input type="text" style="width: 40px; text-align: center" name="['+listBar[i].id+']" value="1" min="0" max="99">'+
                                                '<div class="input-group-append">'+
                                                    '<button class="btn btn-outline-secondary btn-number" type="button" data-type="plus" data-field="['+listBar[i].id+']"><b>+</b></button>'+  
                                                '</div>'+
                                            '</div>'+
                                        '</td>'+
                                        '<td class="table-middle tb-munber">'+
                                            '<input id="total" type="text" style="display: none" name="total['+listBar[i].id+']" value="'+listBar[i].price+'" disabled="disabled">'+
                                            '<span class="displayTotal">'+listBar[i].price+'</span><span>&nbsp;VND</span>'+
                                        '</td>'+
                                    '</tr>'
                    $("#bar-product").append(showInfo);

                }
            },
            addBar : function(id, name, price, color, imgCover){
                var info = {
                    id : id,
                    name : name,
                    price : price,
                    color : color,
                    imgCover : imgCover
                };
                this.data.push(info);
            },
            deleteBar : function(name){
                for(var i = 0; i < this.data.length; i++){
                    if (this.data[i].name === name) {
                        this.data.splice(i, 1);
                    }
                }
            }
        };
        $("#sumbitBar").click(function(){
            var idProduct = $("#idProduct").val();
            var nameProduct = $("#nameProduct").text();
            var priceProduct = parseInt($("#priceProduct").val());
            var colorProduct = $("#colorProduct").val();
            var imgCover = $("#idProduct").val();
            barManager.addBar(idProduct, nameProduct, priceProduct, colorProduct, imgCover);
            barManager.viewBar();
        })
    });