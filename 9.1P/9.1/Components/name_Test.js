// name_Test.js

const Name_Test = {
    data: function() {
        return {
            strName: ""
        }
    },
    template: `
     <h1>String Test</h1>
    <div id="yooo">
        <p>Please enter your name: <input type="text" v-model="strName"></p>
        <p v-if="strName.toLowerCase() == 'duc chung'">
            Awesome name!
        </p>
        <p v-else-if="strName == ''">
        </p>
        <p v-else>
            {{ strName }} is not my name
        </p>

    </div>
    `
}

