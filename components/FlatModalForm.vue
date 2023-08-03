<template>
  <div class="form">
    <div class="form__head">
      <h1 class="form__title">Забронировать квартиру в 2 клика</h1>
      <h2 class="form__subtitle">Наш менеджер перезвонит вам в течение 15 минут</h2>
    </div>
    <form class="form__form" @submit.prevent="submitForm">
      <BaseInput 
        :label="'Ваш email'"
        :id="'email'"
        :placeholder="'Введите ваш email'"
        v-model="formData.email"
        :validation="{
          invalid: v$.email.$dirty && v$.email.$invalid,
          message: v$.email.$errors[0]?.$message,
        }"
        @change="v$.email.$touch"
      />
      <BaseInput 
        :label="'Ваш телефон'"
        :id="'phone'"
        v-model="formData.phone"
        :isPhone="true"
        :validation="{
          invalid: v$.phone.$dirty && v$.phone.$invalid,
          message: v$.phone.$errors[0]?.$message,
        }"
        @change="v$.phone.$touch"
      />
      <el-button class="form__submit" :native-type="'submit'">
        Отправить
      </el-button>
      <p class="form__text">
        Отправляя форму, вы соглашаетесь на <a href="#" class="form__link">обработку персональных данных</a>
      </p>
    </form>
  </div>
</template>

<script setup>
import { required, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const props = defineProps({
  flat: { type: Object }
})

const emit = defineEmits(['closeModal', 'openThanks'])

const formData = reactive({
  id: props.flat.id,
  email: '',
  phone: ''
})

const phone = (value) => value.replace(/\D+/g, '').length === 11

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Поле email обязательно к заполнению', required),
      email: helpers.withMessage('Введен не верный формат адреса', email),
    },
    phone: {
      required: helpers.withMessage('Поле телефон обязательно к заполнению', required),
      phone: helpers.withMessage('Введен не верный формат телефона', phone),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const submitForm = async (e) => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return;

  setTimeout(() => {
    emit('closeModal', true)
  }, 500);
}

</script>

<style lang='scss' scoped>
.form {
  padding: 60px 16px;
  background-color: #EFF2F9;

  @include small {
    padding: 80px 60px;
  }

  @include medium {
    padding: 60px;
    display: grid;
    grid-template-columns: 1fr minmax(360px, 1fr);
    column-gap: 95px;
  }

  @include big {
    padding: 75px 120px 80px;
    column-gap: 190px;
    grid-template-columns: 1fr minmax(620px, 1fr);
  }

  &__head {
    margin-bottom: 40px;

    @include medium {
      margin-bottom: 0;
    }
  }

  &__title {
    margin-bottom: 16px;
    color: $color-black;
    font-size: 2.8em;
    font-weight: 600;
    line-height: 120%;

    @include small {
      font-size: 3.2em;
    }

    @include small {
      font-size: 4.2em;
    }
  }

  &__subtitle {
    color: $color-black;
    font-size: 1.6em;
    font-weight: 300;
    line-height: 155%;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__submit {
    margin-top: 10px; 
    display: inline-block;
    position: static;
    width: 100%;
    max-width: 100%;
    border-radius: 30px;
    background-color: $color-gold;
    border: none;
    color: $color-white;
    height: unset;
    padding: 13px 34px;
    font-weight: 700;

    @include big {
      max-width: 412px;
    }
  }

  &__text {
    margin-top: 12px;
    color: #929292;
    font-size: 1.2em;
    font-style: normal;
    font-weight: 300;
    // line-height: 125%;
  }
  &__link {
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>