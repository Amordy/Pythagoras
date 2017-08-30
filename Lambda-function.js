exports.handler = (event, context) => {

    if (event.session.new) {
      // New Session
      console.log("NEW SESSION")
    }

    switch (event.request.type) {
      case "LaunchRequest":
        // Launch Request
        console.log(`LAUNCH REQUEST`)
        context.succeed(
          generateResponse(
            buildSpeechletResponse("Welcome to an Alexa Skill about Pythagoras", true),
            {}
          )
        )
        break;

      case "IntentRequest":
        // Intent Request
        console.log(`INTENT REQUEST`)
        console.log(event.request.intent.name)
        switch(event.request.intent.name) {
          case "GetHypot":
            console.log(event.request.intent.name)
            console.log(event.request.intent.slots.oppval.value)
            console.log(event.request.intent.slots.adjval.value)
            context.succeed(
              generateResponse(
                buildSpeechletResponse("Pythagoras Intent reached", true),
                {}
              )
            )
            break;
        }

      case "SessionEndedRequest":
        // Session Ended Request
        console.log(`SESSION ENDED REQUEST`)
        break;

      default:
        context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)
    }


// Helpers
    buildSpeechletResponse = (outputText, shouldEndSession) => {

        return {
            outputSpeech: {
                type: "PlainText",
                text: outputText
                },
            shouldEndSession: shouldEndSession
            }

        }

    generateResponse = (speechletResponse, sessionAttributes) => {

        return {
            version: "1.0",
            sessionAttributes: sessionAttributes,
            response: speechletResponse
            }

        }
    }
