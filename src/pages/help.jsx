import React, { Component } from "react";
import {
  Accordion,
  Container,
  Icon,
  Button,
  Segment,
  Header,
} from "semantic-ui-react";

export default class help extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const containerstyle = {
      textAlign: "left",
    };

    const buttonstyle = {
      width: "100% ",
    };

    return (
      <Container style={containerstyle}>
        <Segment inverted size="big">
          1 Temmuz 2021 itibari ile tüm mağazalarımız 10:00 - 22:00* saatleri
          arasında hizmet vermektedir. *Bazı mağazalarımızın çalışma saatleri
          farklılık gösterebilmektedir. Mağaza listesi için lütfen buraya
          tıklayınız.
        </Segment>

        <Button.Group inverted size="medium" widths="7" style={buttonstyle}>
          <Button inverted color="purple" size="large">
            <Icon name="commenting" size="large" />
            <br />
            <br />
            Sıkça Sorulan Sorular
          </Button>
          <Button inverted color="purple">
            <Icon name="home" size="large" />
            <br />
            <br />
            Sipariş Oluşturma/İptal
          </Button>
          <Button inverted color="purple">
            <Icon name="settings" size="large" />
            <br />
            <br />
            Arıza / Onarım Kurulum
          </Button>
          <Button inverted color="purple">
            <Icon name="redo" size="large" />
            <br />
            <br />
            İade Süreçleri
          </Button>
          <Button inverted color="purple">
            <Icon name="truck" size="large" />
            <br />
            <br />
            Kargo/Teslimat/Ürün
          </Button>
          <Button inverted color="purple">
            <Icon name="lock" size="large" />
            <br />
            <br />
            Üyelik İşlemleri
          </Button>
          <Button inverted color="purple">
            <Icon name="mail" size="large" />
            <br />
            <br />
            Bize Ulaşın
          </Button>
        </Button.Group>
        <br />
        <br />

        <Header color="red" textAlign="center" size="huge">
          <b>SIKÇA SORULAN SORULAR </b>
        </Header>

        <Accordion fluid>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Tüm mağazalarımız açık mı?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              1 Temmuz 2021 itibari ile tüm mağazalarımız 10:00 - 22:00*
              saatleri arasında hizmet vermektedir. *Bazı mağazalarımızın
              çalışma saatleri farklılık gösterebilmektedir. Mağaza listesi için
              lütfen buraya tıklayınız.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Mağazaya alınacak müşteri sayısında sınırlama nasıl uygulanıyor?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              Yasal sınırlar dahilinde metrekaremize göre hesaplanan sayıda
              teknolojiseveri içeri kabul ediyoruz. Bu nedenle kişi sayısını
              takip eden çalışanlarımız, yoğunluk olduğu hallerde yeni gelen
              müşterilerimizi mağaza girişinde sosyal mesafe kuralına uygun bir
              şekilde beklemeleri için yönlendirmektedir.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Mağazada ürünleri deneme imkanımız olacak mı?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>Mağazamızdaki teşhir ürünlerini deneyimleyebilirsiniz.</p>
            <p>
              Sağlığınız için teşhir ürünlerini gün içerisinde belirli
              aralıklarla dezenfekte ediyoruz. Dilerseniz denemeden önce
              personelimizden tekrar dezenfekte edilmesini isteyebilirsiniz.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Nasıl sipariş oluşturabilirim?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              Satın almak istediğiniz ürüne tıkladığınızda "Hemen Al" butonuna
              basarak sepetinize ekleyebilirsiniz. "Alışverişe Devam Et" butonu
              ile web sayfasında gezinmeye devam edebilir veya "Siparişi
              Tamamla" butonu ile sepet sayfanıza devam edebilirsiniz.
            </p>
            <p>
              Sepet sayfasında ‘’Devam’’ seçeneği ile ilerleyerek fatura
              adresinizi değiştirebilir, teslimat detaylarından ürünü teslim
              alma ve ödeme seçeneğini belirleyerek satın alma işleminizi
              tamamlayabilirsiniz.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Ödeme Seçenekleri Nelerdir?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>
              Kredi Kartı, Havale/EFT, Kapıda Ödeme ve Hediye Çeki’dir. Ödeme
              işlemlerinizi, seçmiş olduğunuz ödeme yöntemine göre aşağıda yer
              alan adımları izleyerek tamamlayabilirsiniz. * Kredi Kartı: Kredi
              Kartı ile ödeme yöntemini seçip "Devam" butonuna
              tıklayabilirsiniz. Alışverişinizi tamamlamadan önce siparişinizin
              tam özetinin bulunduğu sayfaya yönlendirileceksiniz. Onaylamanız
              halinde satın alma işleminiz tamamlanır. *Havale/EFT: Yapacağınız
              Havale/EFT’lerde Alıcı İsmine "Naxus Turkey Tic. Ltd. Şti.",
              açıklama kısmına 8 haneli SİPARİŞ NUMARANIZI girmeniz
              gerekmektedir. Sipariş tamamlandıktan sonra 24 saat içerisinde
              ödemenin tamamlanması gerekmektedir. Naxus 24 saat içerisinde
              ödemesi yapılmayan siparişleri iptal etme hakkını saklı tutar.
            </p>
            <p>
              *Hediye Kartı: Hediye Kartı seçimi yapmanız durumunda kartın arka
              yüzünde bulunan kart numarasını ve gizli bölümde bulunan şifreyi
              bu alana yazarak ilerleyebilirsiniz. (Şifre ve Kart Numaranız aynı
              şekilde mail adresinize de gönderilmiş olabilir) Hediye kartınızın
              tutarı alışveriş tutarınızdan daha az ise, kalan tutarı farklı bir
              ödeme yöntemiyle ödemeniz mümkün olmayacaktır. Kalan tutar ancak
              farklı hediye kartları birleştirilerek tamamlanabilir. Sonrasında
              "Devam" butonu ile ödeme tamamlanma öncesi siparişinizin tam
              özetinin bulunduğu sayfaya yönlendirileceksiniz. *Kapıda ödeme
              seçeneği Covid-19 pandemi önlemleri kapsamında geçici olarak
              durdurulmuştur. Anlaşmalı bankalar ve taksit seçenekleri hakkında
              detaylı bilgi için tıklayınız.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 5}
            index={5}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            naxusclub.com.tr ya da mobil uygulamadan sipariş verip, ürünü
            mağazadan teslim alabilir miyim?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>
              naxus.com.tr ya da mobil uygulamada “Mağazadan Teslimat” şeklinde
              sipariş verdiğiniz ürünleri, sipariş esnasında seçtiğiniz
              mağazadan teslim alabilirsiniz. Ürün mağaza personelimiz
              tarafından hijyen kurallarımıza uygun şekilde hazırlanacak ve
              teslime hazır olduğunda tarafınıza e-posta ile bilgi verilecektir.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 6}
            index={6}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Siparişimi nasıl takip edebilirim?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>
              www.naxusclub.com.tr adresinden sipariş verdiğinizde tarafınıza
              iletilen mailde ürününüze ait sipariş numaranız bulunmaktadır.
              Siparişiniz kargoya verildiğinde SMS/e-posta ile bilgilendirme
              sağlanmaktadır. Web sitemizin ana sayfasında bulunan ‘’Sipariş
              Takip’’ başlığına tıklayarak siparişinizin güncel durumunu takip
              edebilir veya 0850 222 15 00'nolu telefondan Çağrı Merkezimiz
              üzerinden iletişime geçebilirsiniz.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 7}
            index={7}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Onarım süreci nasıl ilerliyor?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <p>
              Tarafımıza teslim edildiği tarih itibarı ile yetkili servis
              tarafından maksimum 20 iş günü (Pazar günleri ve resmi tatiller
              hariç) içinde işlemler tamamlanır. Ürününüzdeki arıza/kusur,
              "kullanıcı hatası" (düşürme, sıvı teması, vb.) olarak tespit
              edilirse, ücretli onarım sağlanabilmektedir. "Ürün onarılamıyor"
              ise; ürünün yenisiyle değişimi/ücret iadesi için Yetkili Servis
              tarafından "Teknik Rapor" düzenlenir. Yetkili Servis tarafından
              ürününüzde arıza tespit edilemez ise; mağazadan teslim ettiğiniz
              ürünü yine mağazadan teslim almanız gerekmektedir. Kargo ile
              gönderdiğiniz ürün için ise tarafınıza yine kargo ile
              gönderilecektir. Onarımdaki ürününüz için web sayfamızda yer alan
              Onarım Sorgulama linkine tıklayarak veya 0850 222 15 00 numaralı
              Çağrı Merkezi hattımızı arayarak detaylı bilgi alabilirsiniz.
              Onarım sorgulama için tıklayınız.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 8}
            index={8}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            İade / Değişim sürecini nasıl başlatabilirim?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 8}>
            <p>
              Mağazadan satın alınan ürünlerde fatura tarihi itibarı ile Naxus
              Club üyeliği ile satın alınan ürünlerde 28 gün, Club üyeliği
              olmadan satın alınan ürünlerde 14 gündür alınan ürünler için size
              en yakın Naxus mağazasından iade/değişim koşulları kapsamında
              işlem yapabilirsiniz. Koşullar için lütfen tıklayınız.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 9}
            index={9}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Naxus mağazasından satın aldığım (Koruma Paketi/Uzatılmış Garanti
            dahil) ürünü onarıma göndermek istiyorum ne yapmalıyım?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 9}>
            <p>
              Ürününüzün onarım işlemleri için markanın yetkili servisi ile
              irtibata geçebilir ya da size en yakın mağazamıza
              başvurabilirsiniz. Koruma Paketi; 0850 222 15 00 Çağrı Merkezimizi
              arayarak önce 3'ü sonra 1'i tuşlayarak ilgili ekip ile
              görüşebilirsiniz. Uzatılmış Garanti; TV, Beyaz Eşya gibi taşınamaz
              ürünler için 0850 222 15 00 Çağrı Merkezimizi arayarak önce 3'ü
              sonra 2'yi tuşlayarak ilgili ekip ile görüşebilirsiniz. Diğer tüm
              ürünler için uzatılmış Garanti Poliçeniz ile birlikte size en
              yakın Naxus mağazamıza başvuruda bulunabilirsiniz. *Ekran boyutu
              32’’ (inç) altında olan TV ürünlerinin mağazaya götürülmesi
              gerekmektedir.
            </p>
          </Accordion.Content>
        </Accordion>
      </Container>
    );
  }
}
