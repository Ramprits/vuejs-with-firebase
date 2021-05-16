import { ref, onUnmounted } from "vue";
import { db } from "../firebase";

const productsCollection = db.collection("products");

export const createUser = (product) => {
  return productsCollection.add(product);
};

export const getUser = async (id) => {
  const user = await productsCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, product) => {
  return productsCollection.doc(id).update(product);
};

export const deleteUser = (id) => {
  return productsCollection.doc(id).delete();
};

export const useroducts = () => {
  const products = ref([]);
  const close = productsCollection.onSnapshot((snapshot) => {
    products.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  });
  onUnmounted(close);
  return products;
};
