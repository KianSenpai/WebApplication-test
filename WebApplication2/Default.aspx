<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication2._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <gup-wizard-main>
        <gup-details closed-icon="add-circle" open-icon="remove-circle">
            <span slot="label">Step 1 of 8</span>
            <gup-stepper style="" static-mode="">
                <gup-stepper-item step-number="1" step-type="selected" role="listitem" static-mode="">
                    <span slot="label">Identification and name details</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="2" step-type="default" role="listitem" static-mode="">
                    <span slot="label">Personal details</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="3" role="listitem" step-type="default" static-mode="">
                    <span slot="label">Contact information</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="4" role="listitem" step-type="default" static-mode="">
                    <span slot="label">Highschool academic details</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="5" role="listitem" step-type="default" static-mode="">
                    <span slot="label">Achademic details of qualification you want to study</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="6" role="listitem" step-type="default" static-mode="">
                    <span slot="label">Upload files</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="7" role="listitem" step-type="default" static-mode="">
                    <span slot="label">Review your application</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="8" role="listitem" step-type="default" static-mode="">
                    <span slot="label">Step 8</span>
                </gup-stepper-item>
            </gup-stepper>
        </gup-details>
        <gup-form-section>
            <span slot="title" style="font-weight: 600">Identifacion and name details</span>
            <br />
            <form id="form" novalidate="">
                <div class="d-flex flex-column gap-4">
                    <gup-input-field type="numeric" name="your-message">
                        ID number
                    </gup-input-field>
                    <gup-input-field type="date" name="your-message">
                        ID expiray date
                    </gup-input-field>
                    <gup-input-field type="date" name="your-message">
                        Date of birth
                    </gup-input-field>
                    <gup-input-field name="your-message">
                        English first name
                    </gup-input-field>
                    <gup-input-field name="your-message">
                        English second name <span class="font-weight-light">(optional)</span>
                    </gup-input-field>
                    <gup-input-field name="your-message">
                        English third name <span class="font-weight-light">(optional)</span>
                    </gup-input-field>
                    <gup-input-field name="your-message">
                        English last name <span class="font-weight-light">(optional)</span>
                    </gup-input-field>
                    <gup-input-field name="your-message">
                        Arabic first name
                    </gup-input-field>
                    <gup-input-field name="your-message">
                        Arabic second name <span class="font-weight-light">(optional)</span>
                    </gup-input-field>
                    <gup-input-field name="your-message">
                        Arabic third name <span class="font-weight-light">(optional)</span>
                    </gup-input-field>
                    <gup-input-field name="your-message">
                        Arabic last name <span class="font-weight-light">(optional)</span>
                    </gup-input-field>
                </div>

            </form>
        </gup-form-section>
    </gup-wizard-main>
    <gup-wizard-footer nav-aria-label="Service Navigation Footer">
        <gup-button slot="start" appearance="secondary" disabled="">
            Back
        <gup-icon slot="icon-start" icon-name="arrow-back" height="24" width="24"></gup-icon>
        </gup-button>
        <div slot="end">
            <a href="~/Step2" runat="server">
                <gup-button appearance="primary">
                    Continue
                    <gup-icon slot="icon-end" icon-name="arrow-forward" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
    </gup-wizard-footer>
</asp:Content>
