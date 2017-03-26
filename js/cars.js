$(document).ready(function()
      {
        $.get('cars.xml', function(d){
        //$('body').append('<h1>Car List</h1>');
        $('body').append('<dl />');
 
        $(d).find('item').each(function(){
 
            var $item = $(this); 
            var imgl = $item.find('imgl').text();
            var img1 = $item.find('img1').text();
            var img2 = $item.find('img2').text();
            var img3 = $item.find('img3').text();
            var img4 = $item.find('img4').text();
            var name = $item.find('name').text();
            var price = $item.find('price').text();
            var condition = $item.find('condition').text();
            var mileage = $item.find('mileage').text();
            var manufactured = $item.find('manufactured').text();
            var engine = $item.find('engine').text();
            var contact = $item.find('contact').text();
 
            var html = '<div class="allCont"><div class="mainBox">';
            html += '<div class="bigImg"><img class="firstImg" src="' + imgl + '"></div>';
            html += '<div class="smallImg">';
            html += '<img class="dis" src="' + img1 + '">';
            html += '<img class="dis" src="' + img2 + '">';
            html += '<img class="dis" src="' + img3 + '">';
            html += '<img class="dis" src="' + img4 + '">';
            html += '</div></div>';
            html += '<div class="desMain">';
            html += '<div class="carName">' + name + '</div>';
            html += '<div class="price">' + price + '</div>';
            html += '<div class="desCar">' + condition + '</div><div class="desCar">' + mileage + '</div>';
            html += '<div class="desCar">' + manufactured + '</div><div class="desCar">' + engine + '</div>';
            html += '<div class="contact"><b>Contact Info:</b> ' + contact + '</div>';
            html += '</div></div>';

 
            $('dl').append($(html));
             
            $('.loadingPic').fadeOut(1400);
        });
    });
});