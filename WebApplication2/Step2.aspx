<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Step2.aspx.cs" Inherits="WebApplication2.Step2" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <gup-wizard-main>
        <gup-details closed-icon="add-circle" open-icon="remove-circle">
            <span slot="label">Step 2 of 8</span>
            <gup-stepper style="" static-mode="">
                <gup-stepper-item step-number="1" step-type="done" role="listitem" static-mode="">
                    <span slot="label">Identification and name details</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="2" step-type="selected" role="listitem" static-mode="">
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
            <span slot="title" style="font-weight: 600">Personal details</span>
            <br />
            <form id="form" novalidate="">
                <div class="d-flex flex-column gap-4">
                    <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                        <span slot="label">Nationality</span>
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
                        <span slot="label">Country of birth</span>
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
                    <gup-radio-button-group label="Gender" value="radio-1" name="gender">
                        <gup-radio-button name="radios" value="radio-1">Male</gup-radio-button>
                        <gup-radio-button name="radios" value="radio-2">Female</gup-radio-button>
                    </gup-radio-button-group>
                    <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                        <span slot="label">Marital status</span>
                        <gup-dropdown-menu>
                            <gup-dropdown-menu-item label="Doomed" id="item111"></gup-dropdown-menu-item>
                            <gup-dropdown-menu-item label="Free" id="item211"></gup-dropdown-menu-item>
                            <gup-track slot="controls" horizontal-alignment="right">
                                <gup-button id="button11">
                                    Apply
                                </gup-button>
                            </gup-track>
                        </gup-dropdown-menu>
                    </gup-dropdown-field>
                    <gup-input-field name="your-message">
                        Passport number
                    </gup-input-field>
                    <gup-input-field type="date" name="your-message">
                        Passport issue date
                    </gup-input-field>
                    <gup-input-field type="date" name="your-message">
                        Passport expiray date
                    </gup-input-field>
                    <gup-radio-button-group label="Are you employed in Oman?" value="radio-2" name="radios">
                        <gup-radio-button name="radios" value="radio-1">Yes</gup-radio-button>
                        <gup-radio-button name="radios" value="radio-2">No</gup-radio-button>
                    </gup-radio-button-group>
                    <gup-input-field name="your-message">
                        Place of work <span class="font-weight-light">(optional)</span>
                    </gup-input-field>
                </div>

            </form>
        </gup-form-section>
    </gup-wizard-main>
    <gup-wizard-footer nav-aria-label="Service Navigation Footer">
        <div slot="start">
            <a href="~/" runat="server">
                <gup-button slot="start" appearance="secondary">
                    Back
                    <gup-icon slot="icon-start" icon-name="arrow-back" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
        <div slot="end">
            <a href="~/Step3" runat="server">
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
