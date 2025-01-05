<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="StepperControl.ascx.cs" Inherits="WebApplication2.StepperControl" %>

<gup-details content-appearance="sink" closed-icon="add-circle" open-icon="remove-circle">
    <span slot="label">Step <span id="current-step"><%= CurrentStep %></span> of 8</span>
    
    <gup-stepper style="" static-mode="">
        <gup-stepper-item step-number="1" step-type="done" role="listitem" static-mode="">
            <span slot="label">Identification and name details</span>
        </gup-stepper-item>
        <gup-stepper-item step-number="2" step-type="done" role="listitem" static-mode="">
            <span slot="label">Personal details</span>
        </gup-stepper-item>
        <gup-stepper-item step-number="3" role="listitem" step-type="done" static-mode="">
            <span slot="label">Contact information</span>
        </gup-stepper-item>
        <gup-stepper-item step-number="4" role="listitem" step-type="done" static-mode="">
            <span slot="label">Highschool academic details</span>
        </gup-stepper-item>
        <gup-stepper-item step-number="5" role="listitem" step-type="done" static-mode="">
            <span slot="label">Academic details of qualification you want to study</span>
        </gup-stepper-item>
        <gup-stepper-item step-number="6" role="listitem" step-type="done" static-mode="">
            <span slot="label">Upload files</span>
        </gup-stepper-item>
        <gup-stepper-item step-number="7" role="listitem" step-type="selected" static-mode="">
            <span slot="label">Review your application</span>
        </gup-stepper-item>
        <gup-stepper-item step-number="8" role="listitem" step-type="default" static-mode="">
            <span slot="label">Step 8</span>
        </gup-stepper-item>
    </gup-stepper>
</gup-details>

<script>
    // Function to dynamically update the current step
    function setCurrentStep(stepNumber) {
        document.getElementById('current-step').textContent = stepNumber;

        // Optionally update the stepper items based on the current step
        const stepperItems = document.querySelectorAll('gup-stepper-item');
        stepperItems.forEach(item => {
            const step = parseInt(item.getAttribute('step-number'), 10);
            if (step < stepNumber) {
                item.setAttribute('step-type', 'done');
            } else if (step === stepNumber) {
                item.setAttribute('step-type', 'selected');
            } else {
                item.setAttribute('step-type', 'default');
            }
        });
    }

    // Set the current step (can be passed dynamically)
    setCurrentStep(<%= CurrentStep %>);
</script>
