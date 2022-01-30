import React from "react";
import { NavLink } from "react-router-dom";
import {
  Divider,
  Grid,
  Image,
  Segment,
  List,
  Icon,
  Header,
  Button,
} from "semantic-ui-react";

export default function allCampaings() {
  const containerstyle = {
    textAlign: "left",
  };
  const image1 = {
    width: "250px",
    height: "400px",
  };

  const image2 = {
    width: "440px",
    height: "360px",
  };

  const image3 = {
    width: "440px",
    height: "360px",
  };

  return (
    <div>
     <Button.Group inverted size="large" widths="3">
      <Button inverted color="violet" as={NavLink} to="/tumkampanyalar" animated>
            <Button.Content visible>TÜM KAMPANYALAR</Button.Content>
            <Button.Content hidden>
              <Icon name="announcement" />
            </Button.Content>
        </Button>
        <Button inverted color="violet" as={NavLink} to="/birliktealkampanyalari" animated>
            <Button.Content visible>BİRLİKTE AL FIRSATLARI</Button.Content>
            <Button.Content hidden>
              <Icon name="tags" />
            </Button.Content>
        </Button>
        <Button inverted color="violet" as={NavLink} to="/clubkampanyalari" animated>
            <Button.Content visible>CLUB KAMPANYALARI</Button.Content>
            <Button.Content hidden>
              <Icon name="shopping bag" />
            </Button.Content>
          
        </Button>
      </Button.Group>
      <br />
      <br />
      <Grid>
        <Grid.Row>
          <Image style={image1} src="images/discount6.jpg" />

          <Image style={image2} src="images/discount.jpg" />

          <Image style={image3} src="images/discount2.png" />
        </Grid.Row>

        <Grid.Row>
          <Image style={image1} src="images/bosekran.PNG " />

          <Image style={image2} src="images/discount3.png" />

          <Image style={image3} src="images/discount4.jpg" />
        </Grid.Row>

        <Grid.Row>
          <Image style={image1} src="images/bosekran.PNG " />

          <Image style={image2} src="images/discount5.jpg" />

          <Image style={image3} src="images/discount7.jpg" />
        </Grid.Row>
      </Grid>

      <List style={containerstyle} size="large">
        <h3>Kampanyalar Hakkında Genel Bilgilendirme</h3>
        <List.Item>
          <Icon name="arrow right" size="large" color="purple" />
           Kampanyalar başka kampanyalarla, kupon ve sepet kurgularıyla
           birleştirilememektedirr
        </List.Item>
        <List.Item>
          <Icon name="arrow right" size="large" color="purple" />
          Naxus tarafından düzenlenen tüm kampanyalar tüketicilere
          yöneliktir.
        </List.Item>
        <List.Item>
          <Icon name="arrow right" size="large" color="purple" />
          Kampanyalardan ticari gaye ile yararlanıldığı ve ticari alımların
          tespiti halinde kampanya kapsamındaki sipariş iptal edilebilir.{" "}
        </List.Item>
        <List.Item>
          <Icon name="arrow right" size="large" color="purple" />
          Naxus; kampanyalar sırasında oluşabilecek öngörülemeyen
          değişiklikler nedeniyle ürün , fiyat değişimi yapma ve kampanyayı son
          erdirme hakkını saklı tutar.
        </List.Item>
      </List>
      <br />
      <Segment style={containerstyle}>
        <Header as="h2">Naxus Kampanyaları ve İndirimleri</Header>
        Naxus kampanya sayfasını güncel olarak takip ederek tüm
        ihtiyaçlarınız için pek çok fırsata göz atabilirsiniz. Elektronik
        cihazlardan elektrikli ev aletlerine, bilgisayarlardan cep telefonlarına
        kadar birçok üründe, etkileyici fiyatlar ve ürün seçeneklerine
        kampanyalar sayesinde ulaşmanız mümkün. Naxus'un cazip fiyat
        avantajları ve binlerce üründe gerçekleştirdiği indirimler, evinizin
        rahatlığında kolayca alışveriş yapabilmenize olanak tanıyor.
        NAxus'un müşterileri için özenle hazırladığı kampanyaların yer
        aldığı sayfada birçok ürün çeşidini bir arada bulabilir, seçenekleri
        değerlendirebilirsiniz.
        <Divider section />
        <Header as="h2">
          Kaçırılmayacak İndirim Fırsatlarıyla Güncel Kampanyalar Naxus’ta
        </Header>
        <p>
          Değişen alışveriş alışkanlıkları tüketicileri internetten alışveriş
          yapmaya yöneltiyor. İnternetten alışveriş yaparak zamandan tasarruf
          sağlamanın yanı sıra kampanya günlerini takip etmeniz halinde önemli
          avantajlar da sağlayabilirsiniz. Naxus, güncel kampanyaları ile
          müşterilerine en üstün hizmet kalitesini ve en iyi fiyatları
          ulaştırmayı hedefliyor. Güncelliği korunan indirim kampanyaları, en
          trend ürünleri çekici indirim fırsatlarıyla satın almanız için büyük
          fırsatlar yaratıyor. Naxus, düzenlemiş olduğu kampanya
          seçenekleri kadar satın almış olduğunuz ürünlerin birçoğunda aksesuar
          olarak kullanılan ürünlerde de ekstra indirim fırsatları sunuyor.
        </p>
        <p>
          Kasada ve sepette indirim gibi özel avantajlarla sunulan kampanya
          ürünleri, belki de uzun süredir almayı planladığınız ürünlere bu eşsiz
          fırsatlarla sahip olmanız için imkan yaratıyor. Bütçenizi zorlamadan
          istediğiniz ürünlere sahip olma fırsatı sunan Naxus, kampanya
          koşulları dahilinde, taksitlendirme ve tüketici finansmanı gibi özel
          satın alma avantajlarıyla da fark yaratıyor. Geniş ürün yelpazesinde
          sunulan indirim seçenekleri, kendiniz ve eviniz için olduğu kadar
          sevdiklerinizi de mutlu etmek adına önemli bir fırsat sağlıyor. Her
          yaştan sevdiklerinizi özel günlerinde mutlu etmenize yardımcı olacak
          birçok çeşit ürün, kampanya dahilinde indirim avantajlarıyla satışa
          sunuluyor.
        </p>
        <p>
          Güncel olarak takip edeceğiniz Naxus indirim kampanyaları,
          bütçenize dost alışveriş fırsatlarını kapınıza kadar getiriyor.
          Dünyaca ünlü markaların yer aldığı kampanya kapsamında alışveriş
          zevkini güvenle yaşayabileceğiniz On-line satış hizmeti Naxus
          tarafından sağlanıyor. Türkiye'nin dört bir yanından kolaylıkla
          sipariş verebileceğiniz ve üst düzey güvenlik seviyesinde alışveriş
          yapabileceğiniz naxus.com.tr benzersiz indirim ve kusursuz hizmet
          anlayışıyla sizi karşılıyor.
        </p>
        <Divider section />
        <Header as="h2">
          Beyaz Eşyadan Telefona: Herkese Göre İndirimli Kampanyalar
        </Header>
        <p>
          En son teknoloji tasarımlarına sahip olan beyaz eşya ürünleri,
          Naxus'un çok avantajlı beyaz eşya kampanyaları sayesinde tahmin
          edebileceğinizden çok daha fazla indirim fırsatları sağlıyor. Üstelik
          web sitesi üzerinden ve beyaz eşya kampanyaları günlerinde yapacağınız
          alışverişlerde elde edeceğiniz avantajlar yalnızca indirim avantajıyla
          kalmıyor. Hacimli ve taşınması güç beyaz eşyalar, oturduğunuz yerden
          yapacağınız alışverişle, evinize kadar teslim ediliyor.
        </p>
        <p>
          Elektrikli ev aletleri arasından ihtiyacınız olan ürünleri, kampanya
          günlerini takip ederek indirim fırsatları ile kolayca edinebilirsiniz.
          Üstelik elektrikli ev aletleri, evinizdeki işlerinizi kolaylaştırmanın
          yanı sıra, sevdiklerinize küçük ev hediyeleri vermek istediğiniz
          zamanlar için de kampanya fırsatları dahilinde mükemmel hediye
          alternatifleri sunuyor. Farklı özelliklere ve ekran büyüklüklerine
          sahip televizyon modelleri, ses ve görüntü sistemleri de indirim
          fırsatları arasında yer alıyor. Televizyon kampanyaları, benzersiz
          teklifler ve çok özel fırsat seçenekleri ile satışa sunuluyor. İndirim
          seçeneklerinin yanı sıra, birçok üründe ücretsiz nakliye ve ekstra
          indirim gibi fırsatlarla birleştirilen televizyon kampanyaları, uzun
          süredir satın almayı beklediğiniz televizyona sahip olabilmeniz için
          karşı koyulmaz teklifler oluşturuyor.
        </p>
        <p>
          Hızla değişen cep telefonu modellerine yetişmek oldukça hızlı takip
          etmeyi gerektiriyor. Naxus, telefon kampanyaları düzenleyerek en
          hızlı tüketim ürünlerinden biri olan cep telefonlarının, en avantajlı
          ve en karlı biçimde müşterilerine ulaştırılmasını sağlıyor. Telefon
          kampanyaları, aksesuar ve diğer ekstra indirim fırsatları ile
          benzersiz fiyatlar ile satışa sunuluyor. Bilgisayar modelleri de
          kampanya kapsamında her bütçeye ve kullanım amacına uygun seçeneklerle
          sunuluyor. Naxus; iş, eğlence ve oyun tutkunlarına özel
          bilgisayar ve laptop modellerini, elektronik kampanyalar düzenleyerek
          eşsiz indirim seçenekleriyle satışa sunuyor. Rakipsiz fiyatlar ile
          sahip olabileceğiniz bilgisayar modelleri, düzenli olarak takip
          edeceğiniz Naxus elektronik kampanyalar sayfasında geniş bir ürün
          gamıyla yer buluyor.
        </p>
      </Segment>
    </div>
  );
}
