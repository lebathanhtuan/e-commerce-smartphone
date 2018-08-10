    $(document).ready(function(){
        var bagManager = {
            data : [],
            viewBag : function(){
                var listBag = this.data;

                $("#bag-product").empty();
                var showHead = '<tr>' +
                                    '<th colspan="2">Tên sản phẩm</th>'+
                                    '<th>Màu sắc</th>'+
                                    '<th>Giá tiền</th>'+
                                    '<th>Số lượng</th>'+
                                    '<th>Tổng</th>'+
                                '</tr>';
                $("#bag-product").append(showHead);
                for(var i = 0; i<listBag.length; i++){
                    var showInfo = '<tr>'+
                                        '<td class="table-middle"><div class="img-product-bag" style="background: url('+listBag[i].imgCover+') no-repeat; background-position: 50% 50%; background-size: cover;"></div></td>'+
                                        '<td class="table-middle">'+listBag[i].name+'</td>'+
                                        '<td class="table-middle">'+listBag[i].color+'</td>'+
                                        '<td class="table-middle">'+
                                            '<input type="text" style="display: none" name="name['+listBag[i].id+']" value="'+listBag[i].price+'" disabled="disabled">'+
                                            '<span class="displayPrice">'+listBag[i].price+'</span><span>&nbsp;VND</span>'+
                                        '</td>'+
                                        '<td class="table-middle tb-munber">'+
                                            '<div class="input-group">'+
                                                '<div class="input-group-prepend">'+
                                                    '<button class="btn btn-outline-secondary btn-number" type="button" data-type="minus" data-field="['+listBag[i].id+']"><b>-</b></button>'+  
                                                '</div>'+
                                                '<input type="text" style="width: 40px; text-align: center" name="['+listBag[i].id+']" value="1" min="0" max="99">'+
                                                '<div class="input-group-append">'+
                                                    '<button class="btn btn-outline-secondary btn-number" type="button" data-type="plus" data-field="['+listBag[i].id+']"><b>+</b></button>'+  
                                                '</div>'+
                                            '</div>'+
                                        '</td>'+
                                        '<td class="table-middle tb-munber">'+
                                            '<input id="total" type="text" style="display: none" name="total['+listBag[i].id+']" value="'+listBag[i].price+'" disabled="disabled">'+
                                            '<span class="displayTotal">'+listBag[i].price+'</span><span>&nbsp;VND</span>'+
                                        '</td>'+
                                    '</tr>'
                    $("#bag-product").append(showInfo);

                }
            },
            addBag : function(id, name, price, color, imgCover){
                var info = {
                    id : id,
                    name : name,
                    price : price,
                    color : color,
                    imgCover : imgCover
                };
                this.data.push(info);
            },
            deleteBag : function(name){
                for(var i = 0; i < this.data.length; i++){
                    if (this.data[i].name === name) {
                        this.data.splice(i, 1);
                    }
                }
            }
        };
        $("#sumbitBag").click(function(){
            var idProduct = $("#idProduct").val();
            var nameProduct = $("#nameProduct").text();
            var priceProduct = parseInt($("#priceProduct").val());
            var colorProduct = $("#colorProduct").val();
            var imgCover = $("#idProduct").val();
            bagManager.addBag(idProduct, nameProduct, priceProduct, colorProduct, imgCover);
            bagManager.viewBag();
        })
    });