<template>
  
 <div class="wrap">
    <div class="card">
      <div class="card__inner">
        <div class="card___imagen"><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRJ82?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570059328172" alt="" width="250"></div>
        <div class="card__info">
          <p>Audifonos Beats Pro 🎧</p>
          <h2>Color: Gris</h2>
          <p>299$</p>
          <a href="#" class="button">Edit</a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

.wrap {
    width: 100%;
    display: flex;
    justify-content: center;
}

.card {
  margin: 22px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.418);
  border-bottom-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;
  border-top-left-radius: 44px;
  position: relative;
  transition: 0.5s ease-in-out;
}

.card:hover{
    transform: translateY(15px);
}

.card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 254px;
    background: var(--color-navy);
    border-top-right-radius: 44px;
    border-top-left-radius: 44px;
    transition: 0.5s all;
    opacity: 0;

}

.card:hover::before {
    opacity: 1;
}


.card__imagen{
    width: 100%;
    height: 100px;
}

.card__imagen > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card__info {
    font-size: 0.8rem;
    font-family: var(--font-sans);
    padding: 1rem 3rem 0rem 3rem;
    width: 100%;
    height: 10rem;
    line-height: 1.5;
    background-color: var(--color-navy-opaque);
    color: var(--color-light);
    border-bottom-right-radius: 44px;
    border-bottom-left-radius: 44px;
}

.card__info p{
    font-weight: bold;
    margin-bottom: 1rem;
}

.button {
    font-style: var(--font-sans);
    text-decoration: none;
    color: var(--color-light);
    background-color: black;
    padding: 0.6em 4em;
    border-radius: 15px;
    font-weight: bold;
    margin-bottom: 1em;
}

</style>