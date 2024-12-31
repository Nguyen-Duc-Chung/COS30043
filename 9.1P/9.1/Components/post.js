const post = {
    data: function () {
        return {
            statPosts: [],
            strStatus: ''
        }
    },
    // define the template for the component
    template:
    // your code here
    `
      <div>
    <p>
      <strong>Status:</strong>&nbsp;
      <input v-model="strStatus" />&nbsp;
      <button @click="add(strStatus)">Post</button>
    </p>
    <p v-for="(status, index) in statPosts" :key="index">
      {{ status }}
      <button @click="remove(index)">Delete</button>
    </p>
  </div>
    `,

  methods: {
        add: function (status) {
          this.statPosts.unshift(status);
          this.strStatus = "";
        },
        remove: function (index) {
          this.statPosts.splice(index, 1);
        },
      },
}

