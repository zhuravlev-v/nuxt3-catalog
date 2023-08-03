<template>
  <div class="info">
    <div class="info__img">
      <img :src="`/img/${flat.layout}`" alt="">
    </div>
    <div class="info-main">
      <p class="info-main__title">{{ flat.title }}</p>
      <p class="info-main__id">ID{{ flat.id }}</p>
      <p class="info-main__object">{{ flat.objectName }}</p>
      <p class="info-main__deadline">
        <span>Срок сдачи: </span>
        <span class="info-main__deadline_bold">{{ flat.deadline }}</span>
      </p>
      <ul class="info-list">
        <li class="info-list__item">
          <span class="info-list__key">Корпус</span>
          <span class="info-list__value">{{ flat.literNum }}</span>
        </li>
        <li class="info-list__item">
          <span class="info-list__key">Этаж</span>
          <span class="info-list__value">{{ flat.floorNum }}</span>
        </li>
        <li class="info-list__item">
          <span class="info-list__key">Общая площадь</span>
          <span class="info-list__value">
            {{ flat.area }} м<sup>2</sup>
          </span>
        </li>
        <li class="info-list__item">
          <span class="info-list__key">Жилая площадь</span>
          <!-- for demo -->
          <span class="info-list__value">
            {{ (flat.area - 5).toFixed(2) }} м<sup>2</sup>
          </span>
        </li>
        <li class="info-list__item info-list__item_divided info-list__big">
          <span class="info-list__key">Стоимость</span>
          <!-- for demo -->
          <span class="info-list__value">от {{ flat.price }} ₽</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  flat: { type: Object }
})


</script>

<style lang='scss' scoped>
.info {
  margin: 0;
  padding: 0 16px 60px;

  @include small {
    padding: 0 60px 80px;
  }

  @include medium {
    display: flex;
    gap: 45px;
  }

  @include big {
    padding: 0 120px 130px;
  }

  &__img {
    width: 75%;
    max-width: 420px;
    margin: 0 auto;
    display: flex;

    @include small {
      max-width: 426px;
    }

    @include medium {
      width: 52%;
      max-width: 410px;
    }
    
    @include big {
      max-width: 546px;
    }

    & img {
      width: 100%;
      margin: auto;
      // height: 100%;
    }
  }
}

.info-main {
  margin-top: 50px;

  @include medium {
    min-width: 360px;
  }

  @include big {
    min-width: 620px;
  }

  &__title {
    color: $color-black;
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 24px;

    @include small {
      font-size: 2.8em;
    }

    @include medium {
      margin-bottom: 32px;
    }
  }

  &__id {
    color: #999;
    font-size: 1.2em;
    font-weight: 400;
    // line-height: 116.667%;
    letter-spacing: 0.2px;
    margin-bottom: 22px;
  }

  &__object {
    color: $color-blue-dark;
    font-size: 1.6em;
    font-weight: 400;
    // line-height: 87.5%;
    letter-spacing: 0.2px;
    margin-bottom: 14px;
  }

  &__deadline {
    color: #666;
    font-size: 1.2em;
    font-weight: 400;
    // line-height: 116.667%;
    letter-spacing: 0.2px;

    &_bold {
      color: $color-black;
    }
  }
}

.info-list {
  margin-top: 32px;

  @include medium {
    margin-top: 60px;
  }

  &__item {
    font-size: 1.4em;
    display: flex;
    justify-content: space-between;

    @include small {
      font-size: 1.6em;
    }

    &:not(:first-child) {
      margin-top: 16px;

      @include medium {
        margin-top: 24px;
      }
    }

    &:not(:last-child) {
      padding-bottom: 21px;
      border-bottom: 1px solid #DEDEDE;
    }

    &:nth-last-child(2) {
      border-bottom: 1px solid #444;
    }

    &:last-child {
      margin-top: 32px;

      @include medium {
        margin-top: 60px;
      }
    }
  }

  &__key {
    color: #666;
  }

  &__value {
    color: $color-black;
    font-weight: 600;
  }

  &__item_divided {}

  &__big {
    font-size: 1.6em;

    @include small {
      font-size: 2em;
    }

    & .info-list__value {
      color: #263E66;
      font-weight: 700;

      @include small {
        font-size: 1.2em;
      }
    }
  }
}
</style>