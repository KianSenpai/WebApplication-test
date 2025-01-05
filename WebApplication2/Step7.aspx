<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Step7.aspx.cs" Inherits="WebApplication2.Step7" %>
<%@ Register Src="~/StepperControl.ascx" TagPrefix="uc" TagName="Stepper" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <gup-wizard-main>
        <uc:Stepper runat="server" ID="stepperControl" CurrentStep="7" />

        <gup-form-section>
            <h2 style="font-size: 28px; font-weight: 700; margin-top: var(--gup-spacing-between-text);">Review your application</h2>
            <p style="font-size: 24px;">Kindly thoroughly review your application prior to proceeding further.</p>
            <gup-track gap="10" direction="vertical" style="margin-block: 48px;">
                <gup-track gap="6" direction="vertical">
                    <h2 style="font-weight: 600; font-size: 24px;">Personal information</h2>
                    <gup-table>
                        <%
                            string jsonData = @"
                            [
                                { ""Label"": ""ID number"", ""Value"": ""1234"" },
                                { ""Label"": ""ID expiry date"", ""Value"": ""12/12/2025"" },
                                { ""Label"": ""First name (English)"", ""Value"": ""asd"" },
                                { ""Label"": ""Second name (English)"", ""Value"": ""asd"" },
                                { ""Label"": ""Third name (English)"", ""Value"": ""asd"" },
                                { ""Label"": ""Last name (English)"", ""Value"": ""asd"" },
                                { ""Label"": ""First name (Arabic)"", ""Value"": ""asd"" },
                                { ""Label"": ""Second name (Arabic)"", ""Value"": ""asd"" },
                                { ""Label"": ""Third name (Arabic)"", ""Value"": ""asd"" },
                                { ""Label"": ""Last name (Arabic)"", ""Value"": ""asd"" }
                            ]";

                            var personalInfo = new System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<List<Dictionary<string, string>>>(jsonData);

                            foreach (var item in personalInfo)
                            {
                            %>
                            <gup-table-row>
                                <gup-table-cell style="font-weight: 600; width: 50%"><%= item["Label"] %></gup-table-cell>
                                <gup-table-cell><%= item["Value"] %></gup-table-cell>
                            </gup-table-row>
                            <% 
                            }
                        %>
                    </gup-table>
                    <a href="~/" runat="server">
                        <gup-button appearance="secondary">
                            Change details
                        </gup-button>
                    </a>
                </gup-track>
                <gup-track gap="6" direction="vertical">
                    <h2 style="font-weight: 600; font-size: 24px;">Personal details</h2>
                    <gup-table>
                        <%
                            string jsonData1 = @"
                            [
                                { ""Label"": ""Nationality"", ""Value"": """" },
                                { ""Label"": ""Country of birth"", ""Value"": """" },
                                { ""Label"": ""Gender"", ""Value"": """" },
                                { ""Label"": ""Maritial status"", ""Value"": """" },
                                { ""Label"": ""Passport number"", ""Value"": """" },
                                { ""Label"": ""Passport issue date"", ""Value"": """" },
                                { ""Label"": ""Passport expiry date"", ""Value"": """" },
                                { ""Label"": ""Are you employed in Oman?"", ""Value"": """" },
                                { ""Label"": ""Place of work"", ""Value"": """" }
                            ]";

                            var personalInfo1 = new System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<List<Dictionary<string, string>>>(jsonData1);

                            foreach (var item in personalInfo1)
                            {
                            %>
                                <gup-table-row>
                                    <gup-table-cell style="font-weight: 600; width: 50%"><%= item["Label"] %></gup-table-cell>
                                    <gup-table-cell><%= item["Value"] %></gup-table-cell>
                                </gup-table-row>
                            <% 
                            }
                        %>
                    </gup-table>
                    <a href="~/Step2" runat="server">
                        <gup-button appearance="secondary">
                            Change details
                        </gup-button>
                    </a>
                </gup-track>
                <gup-track gap="6" direction="vertical">
                    <h2 style="font-weight: 600; font-size: 24px;">Contact information</h2>
                    <gup-table>
                        <%
                            string jsonData2 = @"
                            [
                                { ""Label"": ""Mobile number"", ""Value"": """" },
                                { ""Label"": ""Email address"", ""Value"": """" },
                                { ""Label"": ""Contact person name"", ""Value"": """" },
                                { ""Label"": ""Contact person mobile"", ""Value"": """" },
                                { ""Label"": ""Region"", ""Value"": """" },
                                { ""Label"": ""Wilayah"", ""Value"": """" }
                            ]";

                            var personalInfo2 = new System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<List<Dictionary<string, string>>>(jsonData2);

                            foreach (var item in personalInfo2)
                            {
                            %>
                                <gup-table-row>
                                    <gup-table-cell style="font-weight: 600; width: 50%"><%= item["Label"] %></gup-table-cell>
                                    <gup-table-cell><%= item["Value"] %></gup-table-cell>
                                </gup-table-row>
                            <% 
                            }
                        %>
                    </gup-table>
                    <a href="~/Step3" runat="server">
                        <gup-button appearance="secondary">
                            Change details
                        </gup-button>
                    </a>
                </gup-track>
                <gup-track gap="6" direction="vertical">
                    <h2 style="font-weight: 600; font-size: 24px;">High school academic details</h2>
                    <gup-table>
                        <%
                            string jsonData3 = @"
                            [
                                { ""Label"": ""High school academic details"", ""Value"": """" },
                                { ""Label"": ""High school graduation year"", ""Value"": """" },
                                { ""Label"": ""High school average"", ""Value"": """" },
                                { ""Label"": ""High school GPA"", ""Value"": """" }
                            ]";

                            var personalInfo3 = new System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<List<Dictionary<string, string>>>(jsonData3);

                            foreach (var item in personalInfo3)
                            {
                            %>
                                <gup-table-row>
                                    <gup-table-cell style="font-weight: 600; width: 50%"><%= item["Label"] %></gup-table-cell>
                                    <gup-table-cell><%= item["Value"] %></gup-table-cell>
                                </gup-table-row>
                            <% 
                            }
                        %>
                    </gup-table>
                    <a href="~/Step4" runat="server">
                        <gup-button appearance="secondary">
                            Change details
                        </gup-button>
                    </a>
                </gup-track>
                <gup-track gap="6" direction="vertical">
                    <h2 style="font-weight: 600; font-size: 24px;">Academic details of the qualification you want to study</h2>
                    <gup-table>
                        <%
                            string jsonData4 = @"
                            [
                                { ""Label"": ""Study location"", ""Value"": """" },
                                { ""Label"": ""Country"", ""Value"": """" },
                                { ""Label"": ""University"", ""Value"": """" },
                                { ""Label"": ""Study mode"", ""Value"": """" },
                                { ""Label"": ""Start date"", ""Value"": """" },
                                { ""Label"": ""Expected graduation date"", ""Value"": """" },
                                { ""Label"": ""Level of qualification"", ""Value"": """" },
                                { ""Label"": ""Main major"", ""Value"": """" }
                            ]";

                            var personalInfo4 = new System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<List<Dictionary<string, string>>>(jsonData4);

                            foreach (var item in personalInfo4)
                            {
                            %>
                                <gup-table-row>
                                    <gup-table-cell style="font-weight: 600; width: 50%"><%= item["Label"] %></gup-table-cell>
                                    <gup-table-cell><%= item["Value"] %></gup-table-cell>
                                </gup-table-row>
                            <% 
                            }
                        %>
                    </gup-table>
                    <a href="~/Step5" runat="server">
                        <gup-button appearance="secondary">
                            Change details
                        </gup-button>
                    </a>
                </gup-track>
                <gup-track gap="6" direction="vertical">
                    <h2 style="font-weight: 600; font-size: 24px;">Uploaded files</h2>
                    <%
                        string jsonData5 = @"
                        [
                            { ""Label"": ""ID copy"", ""Filename"": """", ""Size"": """", ""URL"": """" },
                            { ""Label"": ""Passport copy"", ""Filename"": """", ""Size"": """", ""URL"": """" },
                            { ""Label"": ""Personal photo"", ""Filename"": """", ""Size"": """", ""URL"": """" },
                            { ""Label"": ""Academic report"", ""Filename"": """", ""Size"": """", ""URL"": """" },
                            { ""Label"": ""Previous certificates (high school)"", ""Filename"": """", ""Size"": """", ""URL"": """" }
                        ]";

                        var personalInfo5 = new System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<List<Dictionary<string, string>>>(jsonData5);

                        foreach (var item in personalInfo5)
                        {
                        %>
                            <gup-labelled-item>
                                <gup-file-item
                                    file-name="file.png"
                                    subtitle="2 MB"
                                    url=""
                                    style="width: 45%">
                                  <gup-button with-icon-only="" label="Remove the file" appearance="text" kind="button" type="button">
                                    <gup-icon icon-name="delete-forever" height="24" width="24" style="--width: 24px; --height: 24px;"></gup-icon>
                                  </gup-button>
                                </gup-file-item>
                            <span slot="label"><%= item["Label"] %></span>
                            </gup-labelled-item>
                        <% 
                        }
                    %>
                    <a href="~/Step6" runat="server">
                        <gup-button appearance="secondary">
                            Change details
                        </gup-button>
                    </a>
                </gup-track>
                <gup-track gap="6" direction="vertical">
                    <h2 style="font-weight: 600; font-size: 24px;">Accept self decleration to proceed</h2>
                    <gup-checkbox name="your-checkbox" value="1">I accept the self decleration.</gup-checkbox>
                    <gup-details>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    <span slot="label">What is self decleration?</span>
                    </gup-details>
                </gup-track>
            </gup-track>
        </gup-form-section>
    </gup-wizard-main>
    <gup-wizard-footer nav-aria-label="Service Navigation Footer">
        <div slot="start">
            <a href="~/Step6" runat="server">
                <gup-button slot="start" appearance="secondary">
                    Back
                    <gup-icon slot="icon-start" icon-name="arrow-back" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
        <div slot="end">
            <a href="~/Step7" runat="server">
                <gup-button appearance="primary" disabled="">
                    Proceed to pay
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
