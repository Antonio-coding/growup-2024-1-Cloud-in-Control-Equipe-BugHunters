<!DOCTYPE html>
<html>

<head>
  <!-- Basic -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- Mobile Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <!-- Site Metas -->
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">

  <title>
    Bug Huntres
  </title>

  <!-- slider stylesheet -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />

  <!-- bootstrap core css -->
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />

  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet" />
  <!-- responsive style -->
  <link href="css/responsive.css" rel="stylesheet" />
  <!-- Importe o seu arquivo CarouselItemComponent.js -->
  <script src="components/CarouselItemComponent.js" defer></script>

  <script src="js/components/HeaderComponent.js"></script>
</head>

<body>
  <!-- Seção do herói -->
  <div class="hero_area" id="conteudo">
    <!-- Conteúdo do herói carregado dinamicamente pela requisição AJAX -->
  </div>

  <!-- Script para fazer a requisição AJAX -->
  <script>
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("conteudo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "backend/consultas.php", true);
    xhttp.send();
  </script>

  <!-- Seção do herói -->
  <div class="hero_area" id="conteudo">
    <!-- Conteúdo do herói carregado dinamicamente pela requisição AJAX -->
  </div>

  <!-- Script para fazer a requisição AJAX -->
  <script>
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("conteudo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "backend/consultas.php", true);
    xhttp.send();
  </script>

  <!-- Script para criar e adicionar o cabeçalho -->
  <script>
    // Crie o componente HeaderComponent()
    function HeaderComponent() {
      // Seu código HeaderComponent() aqui...
    }
    // Agora você pode usar HeaderComponent() para construir seu cabeçalho
    const header = HeaderComponent();
    // Adicione o cabeçalho ao corpo do documento
    document.body.appendChild(header);
  </script>

  <!-- Fim da seção do herói -->
  <!-- Seção do slider -->
  <section class="slider_section">
    <div class="slider_container">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <!-- Adicione o código JavaScript que carrega os itens do carrossel -->
        <script>
          function loadCarouselItems() {
            const carouselItems = [
              CarouselItemComponent(),
              CarouselItemComponent(),
              CarouselItemComponent()
            ];

            const carouselInner = document.getElementById('carouselInner');

            carouselItems.forEach(item => {
              carouselInner.appendChild(item);
            });
          }

          document.addEventListener('DOMContentLoaded', loadCarouselItems);
        </script>

        <div class="carousel_btn-box">
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <span class="sr-only">Previous</span>
          </a>
          <img src="images/line.png" alt="" />
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>



  <!-- end slider section -->
  </div>
  <!-- end hero area -->

  <!-- shop section -->

  <section class="shop_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Latest Products
        </h2>
      </div>
      <div class="row">
        <!-- product components -->
        <script src="js/components/ProductComponent.js"></script>

      </div>
      <div class="btn-box">
        <a href="">
          View All Products
        </a>
      </div>
    </div>
  </section>

  <!-- end shop section -->

  <!-- saving section -->

  <section class="saving_section ">
    <div class="box">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="img-box">
              <img src="images/saving-img.png" alt="">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="detail-box">
              <div class="heading_container">
                <h2>
                  Best Savings on <br>
                  new arrivals
                </h2>
              </div>
              <p>
                Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet
                blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.
              </p>
              <div class="btn-box">
                <a href="#" class="btn1">
                  Buy Now
                </a>
                <a href="#" class="btn2">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!-- info section -->

  <section class="info_section  layout_padding2-top">
    <div class="social_container">
      <div class="social_box">
        <!-- Substituição do componente SocialBoxComponent -->
        <script src="components/SocialBoxComponent.js"></script>
      </div>
    </div>
    <div class="info_container ">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <h6>
              ABOUT US
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div class="col-md-6 col-lg-3">
            <!-- Substituição do componente NewsletterFormComponent -->
            <script src="components/NewsletterFormComponent.js"></script>
          </div>
          <div class="col-md-6 col-lg-3">
            <h6>
              NEED HELP
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div class="col-md-6 col-lg-3">
            <h6>
              CONTACT US
            </h6>
            <!-- Substituição do componente ContactInfoComponent -->
            <script src="components/ContactInfoComponent.js"></script>
          </div>
        </div>
      </div>
    </div>
    <!-- Substituição do componente FooterComponent -->
    <footer class=" footer_section">
      <script src="components/FooterComponent.js"></script>
    </footer>

    <!-- end info section -->


    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
    </script>
    <script src="js/custom.js"></script>

</body>

</html>