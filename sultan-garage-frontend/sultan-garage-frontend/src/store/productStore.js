import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  setProducts: (products) => set({ products }),

  // Fetch Products from the server
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('https://sultan-garage-production.up.railway.app/api/products');
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      set({ products: data.data, loading: false });
    } catch (error) {
      set({ 
        error: error.message || 'An error occurred', 
        loading: false 
      });
    }
  },

   createProduct: async (formData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/create`, {
        method: 'POST',
        body: formData, // Send FormData directly
        credentials: 'include', // If using cookies
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create product');
      }
  
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('Product creation error:', error);
      return { 
        success: false, 
        message: error.message || 'Failed to create product'
      };
    }
  },

  // // Create Products
  // createProduct: async (newProduct) => {
  //   // Validate required fields
  //   if (!newProduct.name || !newProduct.image || !newProduct.price) {
  //     return { success: false, message: "Please fill in all fields" };
  //   }

  //   try {
  //     const formData = new FormData();
  //     formData.append("name", newProduct.name);
  //     formData.append("price", newProduct.price);
  //     formData.append("image", newProduct.image);
  //     formData.append("category", newProduct.category);

  //     const res = await fetch("https://sultan-garage-production.up.railway.app/api/products", {
  //       method: "POST",
  //       credentials: "include", // Ensures cookies are sent
  //       body: productData,
  //     });

  //     if (!res.ok) {
  //       throw new Error('Failed to create product');
  //     }

  //     const data = await res.json();

  //     // Update the products state
  //     set((state) => ({
  //       products: [...state.products, data.data],
  //     }));

  //     return { success: true, message: "Product created successfully" };
  //   } catch (error) {
  //     return { 
  //       success: false, 
  //       message: error.message || "An error occurred" 
  //     };
  //   }
  // },

 
  // Delete Product
  deleteProduct: async (productId) => {
    try {
      const res = await fetch(`https://sultan-garage-production.up.railway.app/api/products/${productId}`, {
        method: "DELETE",
      });
      
      const data = await res.json();
  
      if (res.ok) {  // Check HTTP status instead of custom 'success' flag
        set((state) => ({
          products: state.products.filter((product) => product._id !== productId),
        }));
        return { 
          success: true, 
          message: data.message || "Product deleted successfully" 
        };
      } else {
        console.error("Error deleting product", data.message);
        return { 
          success: false, 
          message: data.message || "Failed to delete product" 
        };
      }
    } catch (error) {
      console.error("Error deleting product", error);
      return { success: false, message: "An error occurred" };
    }
  },

  // Update Product
  updateProduct: async (productId, updatedProduct) => {
    try {
      const formData = new FormData();
      formData.append("name", updatedProduct.name);
      formData.append("price", updatedProduct.price);
      formData.append("category", updatedProduct.category);
      
      // Only append image if it's a new file
      if (updatedProduct.image instanceof File) {
        formData.append("image", updatedProduct.image);
      }
  
      const res = await fetch(`https://sultan-garage-production.up.railway.app/api/products/${productId}`, {
        method: "PUT",
        body: formData,
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to update product');
      }
  
      const data = await res.json();
  
      // Update the products state
      set((state) => ({
        products: state.products.map((product) => 
          product._id === productId ? data.data : product
        )
      }));
  
      return {
        success: true,
        message: data.message || "Product updated successfully"
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "An error occurred"
      };
    }
  },
}));