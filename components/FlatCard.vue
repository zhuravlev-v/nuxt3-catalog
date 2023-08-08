<template>
  <div :class="classObject" @click="openFlatModal">
    <el-tooltip v-if="flat.promo" class="box-item" :popper-class="'card__tooltip'" effect="dark" content="Акция: Подарок"
      placement="bottom">
      <div class="card__promo">
        <img src="/img/promo.svg" alt="" class="card__promo-img">
      </div>
    </el-tooltip>
    <div class="card__img">
      <img :src="`/img/${flat.layout}`" alt="">
    </div>
    <div class="card__buttons">
      <button class="btn-reset card__button card__favorites">
        <img src="/img/heart.svg" alt="">
      </button>
      <button class="btn-reset card__button card__compare">
        <img src="/img/scales.svg" alt="">
      </button>
    </div>
    <p class="card__object">{{ flat.objectName }}</p>
    <p class="card__title">{{ flat.title }}</p>
    <div class="card__info">
      <span class="card__info-item">Литер {{ flat.literNum }}</span>
      <span class="card__info-item">Этаж {{ flat.floorNum }}</span>
      <span class="card__info-item">Сдача {{ flat.deadline }}</span>
    </div>
    <div class="card__price-box">
      <p class="card__price" :class="{ 'card__price_gold': flat.oldPrice }">{{ flat.price }} ₽</p>
      <p class="card__price-old" v-if="flat.oldPrice">{{ flat.oldPrice }} ₽</p>
      <span v-if="flat.salePercent" class="card__discount">{{ flat.salePercent }}%</span>
    </div>
    <FlatCardFeatures :features="flat.features" />
  </div>
</template>

<script setup>
import { useModal } from 'vue-final-modal'
import FlatModal from '@/components/FlatModal.vue'

const props = defineProps({
  flat: { type: Object, required: true },
  layout: { type: String, required: false, default: 'card' },
})

const classObject = computed(() => {
  return {
    card: true,
    [`card_${props.layout}`]: true
  }
})

const { open: openFlatModal, close } = useModal({
  component: FlatModal,
  attrs: {
    flat: props.flat,
    async onCloseFlatModal(payload) {
      await close()

      if (payload.openThanks) {
        await payload.open()
      }
    },
  },
})
</script>

<style lang='scss' scoped>
:global(.card__tooltip.el-popper) {
  --el-text-color-primary: #FDC83E;

  font-size: 1.1em;
  line-height: normal;
  padding: 6px 10px;
  background: $color-gold;
  border: none;
  border-radius: 8px;

  @include big {
    font-size: 1.2em;
  }
}

.card {
  font-size: 10px;
  border: 1px solid #EAEAEA;
  background: #FFF;
  cursor: pointer;

  &_card {
    width: 100%;
    height: 100%;
    // max-width: 343px;
    padding: 30px 20px 24px 20px;
    position: relative;

    & .card__promo {
      position: absolute;
      top: 10px;
      left: 10px;
    }

    & .card__buttons {
      position: absolute;
      top: 19px;
      right: 17px;
      display: flex;
      align-items: center;
    }
  }

  &__promo {}

  &__img {
    margin: 0 auto;
    width: 220px;
    height: 236px;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  &__button {}

  &__favorites {}

  &__compare {}

  &__object {
    color: $color-blue-dark;
    font-size: 1.4em;
    font-weight: 400;
    margin-bottom: 6px;
  }

  &__title {
    color: $color-black;
    font-size: 1.6em;
    font-weight: 600;
    margin: 6px 0 12px;
  }

  &__info {
    color: #9AADC6;
    font-size: 1.4em;
    font-weight: 400;
    // line-height: 150%;
    display: flex;
    gap: 6px;
  }

  &__info-item {
    white-space: nowrap;

    &:not(:last-child) {
      &::after {
        // content: ' ';
        content: '\a0';
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: $color-blue;
        margin-left: 6px;
        vertical-align: middle;
        border-radius: 50%;
      }
    }
  }

  &__price-box {
    color: $color-black;
    border-top: 1px solid #E2E2E2;
    display: flex;
    align-items: center;
    margin: 16px 0 20px;
    padding-top: 14px;
  }

  &__price {
    font-size: 1.8em;
    font-weight: 600;
    line-height: 138.889%;
    margin-right: 8px;

    &_gold {
      color: $color-gold;
    }
  }

  &__price-old {
    font-size: 1.4em;
    font-weight: 400;
    text-decoration: line-through;
  }

  &__discount {
    color: $color-white;
    background-color: $color-gold;
    border-radius: 30px;
    display: block;
    padding: 4px 7px;
    font-size: 1.4em;
    font-weight: 400;
    margin-left: 17px;
  }

  &__features {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  // &__feature {
  //   display: inline-block;
  //   border-radius: 16px;
  //   background: $color-blue-light;
  //   color: $color-blue;
  //   padding: 6px 10px;
  //   font-size: 1.2em;
  //   font-weight: 400;
  //   height: min-content;
  // }
}

.card_list {
  padding: 42px 20px 20px 10px;
  position: relative;
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-auto-rows: min-content;
  column-gap: 6px;

  @media (min-width: 407px) {
    grid-template-columns: 115px 1fr;
  }

  @include small {
    grid-template-columns: 32px 100px 1fr 1fr 42px;
    padding: 16px 16px 16px 10px;
  }

  @include medium {
    grid-template-columns: 32px 100px 1fr minmax(100px, 177px) 1fr 42px;
  }

  @include big {
    // grid-template-columns: 32px 100px 220px max-content minmax(130px, 150px) minmax(100px, 177px) 42px;
    grid-template-columns: 32px 100px 220px 1fr minmax(130px, 150px) minmax(100px, 177px) 42px;
  }

  & .card__promo {
    position: absolute;
    top: 10px;
    left: 10px;

    @include small {
      position: static;
      align-self: start;
      grid-column: 1;
      grid-row: 1/4;
      transform: translateY(-6px);
    }

    @include medium {
      grid-row: 1/5;
    }
  }

  & .card__buttons {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;

    @include small {
      position: static;
      grid-column: 5;
      grid-row: 1/4;
      align-self: start;
      flex-direction: column;
      gap: 2px;
      padding-top: 10px;
    }

    @include medium {
      grid-column: 6;
      grid-row: 1/5;
    }

    @include big {
      grid-column: 7;
    }
  }

  & .card__img {
    width: 98px;
    height: 114px;
    grid-row: 1/5;

    @media (min-width: 407px) {
      width: 115px;
      height: 134px;
    }

    @include small {
      width: 88px;
      height: 102px;
      padding-top: 10px;
      padding-right: 12px;
      box-sizing: content-box;
    }

    @include medium {
      grid-row: 1/5;
      width: 100px;
      height: 117px;
    }

    @include big {
      padding: 0;
    }
  }

  & .card__object {
    font-size: 1.2em;
    margin-bottom: 8px;

    @include small {
      grid-row: 1;
      padding-top: 10px;
    }
  }

  & .card__object,
  & .card__title,
  & .card__info,
  & .card__price-box,
  & .card__features {
    grid-column: 2;
  }

  & .card__object,
  & .card__title,
  & .card__info,
  & .card__features {
    @include small {
      grid-column: 3;
    }
  }

  & .card__object {
    @include big {
      padding-top: 17px;
      font-size: 1.4em;
    }
  }

  & .card__title {
    margin: 0 0 15px;
    font-size: 1.4em;

    @include small {
      grid-row: 2;
    }

    @include big {
      font-size: 1.8em;
    }
  }

  & .card__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 8px;
    width: max-content;
    font-size: 1.2em;

    @include small {
      grid-row: 3;
      display: flex;
      gap: 24px;
    }

    @include medium {
      font-size: 1.4em;
    }

    @include big {
      grid-column: 4;
      grid-row: 1/5;
      justify-self: center;
      align-self: center;
    }
  }

  & .card__info-item {
    color: #132A3E;
    font-size: 1em;
    letter-spacing: 0.4px;

    &:nth-child(3) {
      grid-column: span 2;
    }

    &::after {
      content: unset;
    }
  }

  & .card__price-box {
    grid-row: 5;
    margin: 15px 0 0;
    border-top: none;
    padding-top: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;

    @include small {
      grid-column: 4;
      grid-row: 1/5;
      margin: 0 65px 0 70px;
      padding-top: 15px;
    }

    @include medium {
      grid-column: 5;
      grid-row: 1/5;
    }

    @include big {
      margin: 0;
      padding: 0;
      align-self: center;
    }
  }

  & .card__price {
    font-size: 2em;
  }

  & .card__price-old {
    order: -1;
  }

  & .card__discount {
    margin: 0;
  }

  & .card__features {
    margin: 15px 0 0;

    @include medium {
      grid-column: 4;
      grid-row: 1/5;
      height: max-content;
    }

    @include big {
      grid-column: 6;
      margin: 0;
      align-self: center;
    }
  }
}
</style>