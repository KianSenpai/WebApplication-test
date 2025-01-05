<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Step3.aspx.cs" Inherits="WebApplication2.Step3" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <gup-wizard-main>
        <gup-details content-appearance="sink" closed-icon="add-circle" open-icon="remove-circle">
            <span slot="label">Step 3 of 8</span>
            <gup-stepper style="" static-mode="">
                <gup-stepper-item step-number="1" step-type="done" role="listitem" static-mode="">
                    <span slot="label">Identification and name details</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="2" step-type="done" role="listitem" static-mode="">
                    <span slot="label">Personal details</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="3" role="listitem" step-type="selected" static-mode="">
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
        <h2 style="font-size: 28px; font-weight: 700; margin-top: var(--gup-spacing-between-text);">Contact information</h2>
        <form>
            <gup-form-list style="margin-block: 48px;">
                <gup-input-field name="your-message" type="tel" placeholder="+96812345678" pattern="\+968[0-9]{8}">
                    Mobile number
                </gup-input-field>
                <gup-input-field name="your-message" type="email">
                    Email address
                </gup-input-field>
                <gup-input-field name="your-message">
                    Contact person name
                </gup-input-field>
                <gup-input-field name="your-message" type="email">
                    Contact person email
                </gup-input-field>
                <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                    <span slot="label">Region</span>
                    <gup-dropdown-menu search-enabled="">
                        <gup-dropdown-menu-item label="Oman" id="item1"></gup-dropdown-menu-item>
                        <gup-dropdown-menu-item label="Narnia" id="item2"></gup-dropdown-menu-item>
                        <gup-track slot="controls" horizontal-alignment="right">
                            <gup-button id="button">
                                Apply
                            </gup-button>
                        </gup-track>
                    </gup-dropdown-menu>
                </gup-dropdown-field>
                <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                    <span slot="label">Wilaya</span>
                    <gup-dropdown-menu search-enabled="">
                        <gup-dropdown-menu-item label="Oman" id="item11"></gup-dropdown-menu-item>
                        <gup-dropdown-menu-item label="Narnia" id="item21"></gup-dropdown-menu-item>
                        <gup-track slot="controls" horizontal-alignment="right">
                            <gup-button id="button1">
                                Apply
                            </gup-button>
                        </gup-track>
                    </gup-dropdown-menu>
                </gup-dropdown-field>
            </gup-form-list>
        </form>
    </gup-wizard-main>
    <gup-wizard-footer nav-aria-label="Service Navigation Footer">
        <div slot="start">
            <a href="~/Step2" runat="server">
                <gup-button slot="start" appearance="secondary">
                    Back
                    <gup-icon slot="icon-start" icon-name="arrow-back" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
        <div slot="end">
            <a href="~/Step4" runat="server">
                <gup-button appearance="primary">
                    Continue
                    <gup-icon slot="icon-end" icon-name="arrow-forward" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
    </gup-wizard-footer>

    <script>

        component.querySelector('#button').addEventListener('gup-click', () => {
            console.log(component.getSelectedDropdownItems());
            component.applyValue();
        });

    </script>
</asp:Content>
