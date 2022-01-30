import React from "react";
import { NavLink } from "react-router-dom";
import {
  Image,
  Button,
  Icon,
  Label,
  Divider,
  Grid,
  Segment,
  Header,
} from "semantic-ui-react";

export default function naxusClub() {
  const basliklar = {
    color: "purple",
  };

  const containerstyle = {
    textAlign: "left",
  };
  return (
    <div>
      <Image src="images/family2.PNG" size="huge" centered />
      <br />
      <Button secondary size="big" as={NavLink} to="/signup">
        üYE OL <Icon name="chevron circle right" />
      </Button>
      <Button secondary size="big" as={NavLink} to="/loginscreen">
        GİRİŞ <Icon name="chevron circle right" />
      </Button>
      <br />
      <br />
      <Label size="big" color="purple">
        NAXUS CLUB'A ÜYE OLDUNUZ MU?{" "}
      </Label>
      <br />
      <br />
      
      <Segment>
        <Grid columns={4} relaxed="very">
          <Grid.Column>
            <p>
              <Image src="images/hediye2.PNG" size="small" circular />
            </p>
          </Grid.Column>
          <Grid.Column>
            <br />
            <p>
              <h4 style={basliklar}>
                <b> HOŞ GELDİN KUPONU</b>{" "}
              </h4>
            </p>
            <p>
              <b>
                Üyelik süreci tamamlandığında, size iletilen Naxus CLUB Hoş
                Geldin İndirim Kuponu ile kazanmaya başlayabilirsiniz.
              </b>
            </p>
          </Grid.Column>

          <Grid.Column>
            <p>
              <Image src="images/birthday2.PNG" size="small" circular />
            </p>
          </Grid.Column>
          <Grid.Column>
            <br />
            <p>
              <h4 style={basliklar}>
                <b> DOĞUM GÜNÜ SÜPRİZLERİ</b>
              </h4>
            </p>
            <p>
              <b>
                Doğum gününüz olmak üzere size özel indirim kuponlarıyla
                kazanmaya devam edebilirsiniz.
              </b>
            </p>
          </Grid.Column>
        </Grid>
        <Divider vertical></Divider>
        <Grid columns={4} relaxed="very">
          <Grid.Column>
            <p>
              <Image src="images/indirim2.PNG" size="small" circular />
            </p>
          </Grid.Column>
          <Grid.Column>
            <br />
            <p>
              <h4 style={basliklar}>
                <b>ALDIKÇA KAZAN</b>{" "}
              </h4>
            </p>
            <p>
              <b>
                Naxus CLUB üyesi olarak, yaptığınız alışverişlere göre hediye
                ürünler ve indirim kuponları kazanabilirsiniz.
              </b>
            </p>
          </Grid.Column>

          <Grid.Column>
            <p>
              <Image src="images/faturasizhayat2.PNG" size="small" circular />
            </p>
          </Grid.Column>
          <Grid.Column>
            <br />
            <p>
              <h4 style={basliklar}>
                <b> FATURASIZ HAYAT</b>
              </h4>
            </p>
            <p>
              <b>
                Naxus CLUB üyeliğiniz kapsamında yaptığınız tüm alışverişleri
                üyelik hesabınızdan görüntüleyebilirsiniz.
              </b>
            </p>
          </Grid.Column>
        </Grid>

        <Grid columns={4} relaxed="very">
          <Grid.Column>
            <p>
              <Image src="images/gunsayimi.PNG" size="small" circular />
            </p>
          </Grid.Column>
          <Grid.Column>
            <br />
            <p>
              <h4 style={basliklar}>
                <b> UZATILMIŞ İADE SÜRESİ</b>{" "}
              </h4>
            </p>
            <p>
              <b>
                Naxus CLUB üyesi olarak; tüm müşterilerimize satın alımı takip
                eden 14 gün olarak sunulan alışveriş sonrası iade taahhüdünü
                aynı şartlar geçerli olmak kaydıyla 23 gün olarak
                kullanabilirsiniz.
              </b>
            </p>
          </Grid.Column>

          <Grid.Column>
            <p>
              <Image src="images/clubkart.PNG" size="small" circular />
            </p>
          </Grid.Column>
          <Grid.Column>
            <br />
            <p>
              <h4 style={basliklar}>
                <b> CLUB AVANTAJLARI</b>
              </h4>
            </p>
            <p>
              <b>
                Naxus CLUB üyelerine özel birbirinden avantajlı marka
                işbirlikleri fırsatlarından düzenli olarak yararlanabilirsiniz
              </b>
            </p>
          </Grid.Column>
        </Grid>
      </Segment>

      <br />
      <Grid columns="three" divided color="red">
        <Grid.Row>
          <Grid.Column color="purple">
            <Header as="h3">İletişim</Header>
            <h5>nurcan.aksuf@gmail.com</h5>
            <h5>senagulkorkmazz@gmail.com</h5>
          </Grid.Column>
          <Grid.Column color="purple">
            <Header as="h3">NaxusCLUB</Header>
            <h5>
              Fırsatlardan yararlanmak için hemen NaxusClub uygulamasını indirin
            </h5>
          </Grid.Column>
          <Grid.Column color="purple">
            
            <Button color="purple"><Header as="h3">?</Header> <h5>Naxus CLUB sıkça sorulan sorular</h5></Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
      <Segment style={containerstyle}>
        Avrupa’nın 1 numaralı elektronik perakendecisi ve 50 bin çeşitlik geniş
        ürün yelpazesi ile alanında lider olan Naxus, Naxus Club Kart
        ile kullanıcılara çok sayıda avantaj sunuyor. Kişiye özel kampanyalar,
        indirim kuponu, hoş geldin kuponu, faturasız yaşam, uzatılmış ürün iade
        süresi ve birçok hediye, Naxus Club Kart üyelerini bekliyor. Yeni
        üye olanlara 50 TL’lik hoş geldin kuponu, her kişiye doğum gününde 50
        TL’lik doğum günü kuponu ve daha pek çok ayrıcalık için Naxus Club
        Kart ailesine kolayca dahil olabilir, harcadıkça indirim ve hediye
        kazanabilirsiniz.
        <Divider section />
        <Header as="h3">Naxus CLUB Üyeliği</Header>
        <p>
          Naxus CLUB ailesine dahil olmak ve sayısız avantajdan yararlanmak için
          mağaza personelimizin desteği ile, dijital olarak naxus.com.tr
          veya Naxus mobil uygulamasından üyelik oluşturabilirsiniz. Bu sayede
          indirim kuponu ya da uzatılmış ürün iade süresi gibi ayrıcalıklardan
          anında faydalanmaya başlayabilirsiniz.
        </p>
        <p>
          Naxus CLUB‘ın sunduğu tüm avantajlardan web sitemizi veya cep
          telefonunuzu kullanarak yararlanabilirsiniz. Bunun için tek yapmanız
          gereken Naxus mobil uygulamasını akıllı telefonunuza yüklemek
          veya web sitemize Hesabım alanından giriş yaparak Naxus Club üyelik
          bilgileriniz ile alışverişinizi gerçekleştirmek!
        </p>
        <Divider section />
        <Header as="h3">Naxus CLUB İndirim Kuponu</Header>
        Naxus CLUBüyelik kartı sahibi olarak her 3, 6, 9 ve 12. alışverişinizde
        sürpriz hediyelerin yanı sıra indirim kuponu da kazanabilir,
        alışverişlerinizin toplam tutarına göre belirlenen indirim kuponu
        fırsatları ile 30, 60 ve 120 TL değerinde indirim kuponları elde
        edebilirsiniz. Kuponları kullanabilmek için mağazalarımızdan, web
        sitemizden, Naxus mobil uygulamasından ya da çağrı merkezimizden sahip
        olduğunuz kuponları aktifleştirmeniz yeterlidir. Kuponlar kazanılan
        tarihten itibaren 3 ay içerisinde kullanılabilir, ürün iadesi olması
        durumunda ise iptal edilir.
        <Divider section />
        <Header as="h3">Naxus CLUB Uzatılmış Ürün İade Süresi</Header>
        Satın alınan ürünlerin hiçbir mazeret gösterilmeden, koşulsuz şartsız
        iade edilme süresi 14 gün iken, Naxus CLUB üyelik kartı sahipleri, özel
        olarak 28 günlük iade süresine sahip olmaktadır. Ürün herhangi bir
        şekilde zarar görmediği takdirde 28 gün içinde satın almış olduğunuz bu
        ürünü iade edebilirsiniz. Uzatılmış ürün iade süresi ayrıcalığından
        yararlanmak için ürünün ambalajının açılmaması, açıldıysa da müşteri
        kaynaklı bir hatanın bulunmaması gerekmektedir.
        <Divider section />
        <Header as="h3">Naxus CLUB Kişiye Özel Kampanyalar</Header>
        Naxus her müşterisini özel olarak görmekte ve kişiye özel kampanyalar
        sunmaktadır. Üyelik başvurusu anında beyan edilen doğum gününüzde 50 TL
        değerinde indirim fırsatı sağlayan Naxus CLUB, aynı zamanda üyelikten
        sonraki 48 saat içinde kullanılabilecek 50 TL’lik indirim kuponunu da
        kulanımınıza sunmaktadır. Tüm mağazalarımızda kullanabileceğiniz bu
        indirimler aynı zamanda mobil uygulama ve internet sitemiz üzerinden
        yapacağınız alışverişlerinizde de geçerli olacaktır. Tek koşul, 500 TL
        ve üzerindeki alışverişlerinizde bu indirim kuponunu kullanabilirsiniz.
        <Divider section />
        <Header as="h3">Naxus CLUB Hediye Ürünler</Header>
        Naxus CLUB, sunmuş olduğu Aldıkça Kazan fırsatı ile çok sayıda hediyeyi
        müşterilerine armağan etmektedir. Alışveriş tutarına göre belirlenen
        birbirinden güzel hediye ürünler ve indirim kuponları kazanırsınız.
        Bunun için Naxus CLUB üyesi olmanız ve belirlenen tutarlarda alışveriş
        yapmanız yeterli. Kazanabileceğiniz hediye ve indirim kuponlarını
        Aldıkça Kazan sayfasından takip edebilirsiniz.
        <Divider section />
        <Header as="h3">Naxus CLUB Faturasız Yaşam</Header>
        Naxus CLUB üyeleri, yaptıkları alışverişler sonrasında faturalarını
        saklamak zorunda kalmıyor. Üyelik kapsamında yapılan tüm alışverişlere
        yönelik satın alma geçmişinize, mağazalardan, naxus.com.tr
        adresinden, NAxus mobil uygulamasından veya çağrı merkezimizden
        ulaşabilirsiniz. Ürün iade ve değişim gibi süreçlerin yürütülmesinde
        büyük kolaylık sağlayan bu yöntem sayesinde basılı faturalarınızı
        saklama derdinden kurtulursunuz.
      </Segment>
    </div>
  );
}
