<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Step4.aspx.cs" Inherits="WebApplication2.Step4" %>
<%@ Register Src="~/StepperControl.ascx" TagPrefix="uc" TagName="Stepper" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <gup-wizard-main>
        <uc:Stepper runat="server" ID="stepperControl" CurrentStep="4" />

        <h2 style="font-size: 28px; font-weight: 700; margin-top: var(--gup-spacing-between-text);">High school academic details</h2>
        <form>
            <gup-form-list style="margin-block: 48px;">
                <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                    <span slot="label">High school certificate</span>
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
                    <span slot="label">High school graduation year</span>
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
                <gup-input-field name="your-message">
                    High school average
                </gup-input-field>
                <gup-input-field name="your-message">
                    High school GPA
                </gup-input-field>
            </gup-form-list>
        </form>
    </gup-wizard-main>
    <gup-wizard-footer nav-aria-label="Service Navigation Footer">
        <div slot="start">
            <a href="~/Step3" runat="server">
                <gup-button slot="start" appearance="secondary">
                    Back
                    <gup-icon slot="icon-start" icon-name="arrow-back" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
        <div slot="end">
            <a href="~/Step5" runat="server">
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
