let flowerAry=[
    {src:'flower/01agrimony.jpg',vel:'龍芽草花精',a_href:'Agrimony',a_pic:'https://wordpress.org/openverse/image/f1d6eaf4-9171-4367-a989-b6d2ed48b598'},
    {src:'flower/02aspen.jpg',vel:'白楊花精',a_href:'Aspen',a_pic:'https://wordpress.org/openverse/image/f1b2ca16-ba65-49ab-b6d5-e61b9f482a0f'},
    {src:'flower/03beech.jpg',vel:'山毛櫸花精',a_href:'Beech',a_pic:'https://commons.wikimedia.org/w/index.php?curid=752225'},
    {src:'flower/04centaury.jpg',vel:'矢車菊花精',a_href:'Centaury',a_pic:'https://commons.wikimedia.org/w/index.php?curid=913350'},
    {src:'flower/05clematis.jpg',vel:'鐵線蓮花精',a_href:'Clematis',a_pic:'https://commons.wikimedia.org/wiki/File:Clematis_vitalba.JPG'},
    {src:'flower/06elm.jpg',vel:'榆樹花精',a_href:'Elm',a_pic:'https://wordpress.org/openverse/image/be0e0ca1-e700-4bed-91fe-81836bf85503'},
    {src:'flower/07cerato.jpg',vel:'水蕨花精',a_href:'Cerato',a_pic:'https://unsplash.com/photos/pQYeO4dOtMU'},
    {src:'flower/08cherry_plum.jpg',vel:'櫻桃李花精',a_href:'Cherry_Plum',a_pic:'https://unsplash.com/photos/6lWOUKOoR1Q'},
    {src:'flower/09chestnut_bud.jpg',vel:'栗苞花精',a_href:'Chestnut_Bud',a_pic:'https://wordpress.org/openverse/image/0ab8c00f-5b25-40ff-99a3-9973355b08de'},
    {src:'flower/10chicory.jpg',vel:'菊苣花精',a_href:'Chicory',a_pic:'https://unsplash.com/photos/0exfH5O-GFc'},
    {src:'flower/11crab_apple.jpg',vel:'野生酸蘋果花精',a_href:'#Crab_Apple',a_pic:'https://unsplash.com/photos/blljdGjWIek'},
    {src:'flower/12gentian.jpg',vel:'龍膽花精',a_href:'Gentian',a_pic:'https://wordpress.org/openverse/image/89a27b60-3157-4ce4-99ac-3654f8ac3d0b'},
    {src:'flower/13gorse.jpg',vel:'荊豆花精',a_href:'Gorse',a_pic:'https://wordpress.org/openverse/image/b559862c-c4b8-4ac9-aebc-b5f4180d106f'},
    {src:'flower/14holly.jpg',vel:'冬青花精',a_href:'Holly',a_pic:'https://wordpress.org/openverse/image/197d1de6-494c-4272-96ab-d99f959d3593'},
    {src:'flower/15heather.jpg',vel:'石楠花精',a_href:'Heather',a_pic:'https://unsplash.com/photos/BJsrf77qmFE'},
    {src:'flower/16honeysuckle.jpg',vel:'忍冬花精',a_href:'Honeysuckle',a_pic:'https://unsplash.com/photos/jh4P20cUK0A'},
    {src:'flower/17hornbeam.jpg',vel:'鵝耳櫪花精',a_href:'Hornbeam',a_pic:'https://unsplash.com/photos/FXjZ4fOdM9w'},
    {src:'flower/18impatiens.jpg',vel:'鳳仙花花精',a_href:'Impatiens',a_pic:'https://unsplash.com/photos/RU-Te6VEtmc'},
    {src:'flower/19larch.jpg',vel:'落葉松花精',a_href:'Larch',a_pic:'https://unsplash.com/photos/cBGa7qH8JgE'},
    {src:'flower/20mimulus.jpg',vel:'溝酸漿花精',a_href:'Mimulus',a_pic:'https://unsplash.com/photos/7cVnFVuoCiU'},
    {src:'flower/21mustard.jpg',vel:'芥末花精',a_href:'Mustard',a_pic:'https://unsplash.com/photos/tpjMlNSfL8E'},
    {src:'flower/22oak.jpg',vel:'橡樹花精',a_href:'Oak',a_pic:'https://unsplash.com/photos/tLSu12Rv1jQ'},
    {src:'flower/23olive.jpg',vel:'橄欖花精',a_href:'Olive',a_pic:'https://wordpress.org/openverse/image/dc1c4f3a-f90d-426f-9ee1-69de6c87715a'},
    {src:'flower/24pine.jpg',vel:'松樹花精',a_href:'Pine',a_pic:'https://unsplash.com/photos/eul78mbBc-A'},
    {src:'flower/25rock_water.jpg',vel:'岩水花精',a_href:'Rock_Water',a_pic:'https://unsplash.com/photos/8X1-pcDF8l0'},
    {src:'flower/26red_chestnut.jpg',vel:'紅栗花精',a_href:'Red_Chestnut',a_pic:'https://unsplash.com/photos/8k7umXccivI'},
    {src:'flower/27rock_rose.jpg',vel:'岩薔薇花精',a_href:'Rock_Rose',a_pic:'https://unsplash.com/photos/7fAk7lMZMms'},
    {src:'flower/28scleranthus.jpg',vel:'線球草花精',a_href:'Scleranthus',a_pic:'https://wordpress.org/openverse/image/d0cc0460-53e9-4b73-be49-fade484f2063'},
    {src:'flower/29star_of_bethlehem.jpg',vel:'聖星百合花精',a_href:'Star_Of_Bethlehem',a_pic:'https://wordpress.org/openverse/image/fa323d8a-1a44-4fd4-96a1-c54fab4fd3b9'},
    {src:'flower/30sweet_chestnut.jpg',vel:'甜栗花精',a_href:'Sweet_Chestnut',a_pic:'https://wordpress.org/openverse/image/7456c32f-5782-49df-aa16-ae07176badf0'},
    {src:'flower/31vervain.jpg',vel:'馬鞭草花精',a_href:'Vervain',a_pic:'https://wordpress.org/openverse/image/de60e811-ed69-46ce-8820-874f99a5d43c'},
    {src:'flower/32vine.jpg',vel:'葡萄花精',a_href:'Vine',a_pic:'https://unsplash.com/photos/mHLHSn4gtno'},
    {src:'flower/33walnut.jpg',vel:'胡桃花精',a_href:'Walnut',a_pic:'https://wordpress.org/openverse/image/dc4dcde4-7612-4e0c-9902-8dcde7613d53'},
    {src:'flower/34water_violet.jpg',vel:'水堇花精',a_href:'Water_Violet',a_pic:'https://wordpress.org/openverse/image/5ac9a1bf-1d30-4415-ac4e-258030017a13'},
    {src:'flower/35white_chestnut.jpg',vel:'白栗花精',a_href:'White_Chestnut',a_pic:'https://unsplash.com/photos/U34ZyKv9NzA'},
    {src:'flower/36wild_oat.jpg',vel:'野燕麥花精',a_href:'Wild_Oat',a_pic:'https://unsplash.com/photos/q4pZuOnUJqM'},
    {src:'flower/37wild_rose.jpg',vel:'野玫瑰花精',a_href:'Wild_Rose',a_pic:'https://unsplash.com/photos/up9ek30IZEA'},
    {src:'flower/38willow.jpg',vel:'楊柳花精',a_href:'Willow',a_pic:'https://unsplash.com/photos/3OQ2AqWd5PU'}
    ]

    function draw(num, ary, box) {
        let pic = Array("pic0", "pic1", "pic2", "pic3", "pic4",'pic5');
        let txt = Array("text0", "text1", "text2", "text3", "text4",'text5');
        let imgs = Array("img0", "img1", "img2", "img3", "img4",'img5');
        let a_pic=Array('a_pic0','a_pic1','a_pic2','a_pic3','a_pic4','a_pic5');
        let a_href=Array('a_href0','a_href1','a_href2','a_href3','a_href4','a_href5');
        let newAry = [];
        for (i = 0; i < num; i++) {
          let n = Math.floor(Math.random() * ary.length);
          if (newAry.includes(ary[n])) {
            i -= 1;
            continue;
          } else {
            newAry.push(ary[n]);
          }
          document.getElementById(pic[i]).src = newAry[i].src;
          document.getElementById(txt[i]).innerHTML = newAry[i].vel;
          document.getElementById(a_pic[i]).href = newAry[i].a_pic;
          document.getElementById(a_href[i]).href = '#'+newAry[i].a_href;
          document.getElementById(newAry[i].a_href).style = 'border:3px solid #B55D4C';
        }
        for (i = 0; i < box; i++) {
          document.getElementById(imgs[i]).style.display = "block";
        }
        return newAry;
      }

      // donationAlert
      function donationAlert() {
        Swal.fire({
          title:"中信App QRcode",
          imageUrl: "donation.jpg",
          imageHeight: 150,
          imageWidth:150,
          imageAlt: "donationJpg",
          // footer:"822 059540139686",
          confirmButtonText:"關閉"
        });
      }
  