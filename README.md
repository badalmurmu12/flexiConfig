Write a React or Angular Component that can handle a JSON object that looks something like:

const flexiConfig = {
  "items": [
    {
      "name": "personname",
      "label": "Person's Name",
      "type": "TextField"
    },
    {
      "name": "states",
      "label": "Person's state",
      "type": "DropDown",
      "values": [
        "Karnataka",
        "Kerala",
        "Tamil Nadu"
      ],
      "items": [
        {
          "name": "personage",
          "label": "Person's Age",
          "type": "TextField"
        },
        {
          "name": "District",
          "label": "Person's district",
          "type": "DropDown",
          "values": [
            "Bangalore",
            "Tumukuru",
            "Hassan"
          ]
        }
      ]
    }
  ]
}
and is invoked like in ReactJS
<Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig}/>

And similarly or equivalent invoking in AngularJS.

In this case, the component creates the appropriate TextField and DropDown HTML elements to allow the user to enter the necessary information. The component also renders a submit button that calls the onSubmit function supplied in the props / argument with a JSON object as an argument that contains the user entered values for each of the items in flexiConfig.
