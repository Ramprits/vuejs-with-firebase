<template>
  <vue-title title="Login Page" />
  <section class="section">
    <div class="container">
      <div class="is-max-w-md mx-auto">
        <div class="mb-6 has-text-centered">
          <a href="#"
            ><img src="metis-assets/logos/metis/metis.svg" alt="" width="106"
          /></a>
        </div>
        <div class="box has-text-centered py-6 px-5">
          <span class="subtitle is-spaced">Sign In</span>
          <h4 class="title is-size-3">Join our community</h4>
          <Form :validation-schema="schema" @submit="submit">
            <div class="field">
              <div class="control has-icons-right">
                <Field
                  class="input"
                  type="text"
                  name="email"
                  placeholder="name@email.com"
                />
                <ErrorMessage name="identifier" />
                <span class="icon is-small is-right">
                  <svg
                    class="image is-24x24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-right">
                <Field
                  class="input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" />
                <span class="icon is-small is-right">
                  <svg
                    class="image is-24x24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div class="field mb-5">
              <div class="control">
                <button type="submit" class="button is-primary is-fullwidth">
                  Sign In
                </button>
              </div>
            </div>
            <p class="mb-5">or continue with</p>
            <button
              class="mb-3 button is-dark is-outlined is-fullwidth"
              href="#"
            >
              <img
                class="mr-2"
                src="metis-assets/logos/facebook-sign.svg"
                alt=""
              />
              <span>Sign In with Facebook</span>
            </button>
            <button class="button is-dark is-outlined is-fullwidth" href="#">
              <img
                class="mr-2"
                src="metis-assets/logos/google-sign.svg"
                alt=""
              />
              <span>Sign In with Google</span>
            </button>
          </Form>
        </div>
        <div class="has-text-centered">
          <p><a href="#">Police privacy</a> and <a href="#">Terms of Use</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { login } from "../services/auth";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      email: yup.string().required().email("Please eneter valid email!"),
      password: yup.string().required().min(8),
    });

    return {
      schema,
    };
  },
  methods: {
    async submit(values) {
      this.$store.dispatch("auth/signIn", values);
    },
  },
};
</script>

<style>
</style>