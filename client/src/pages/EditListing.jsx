import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Package, Calendar, MapPin } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { apiClient } from "@/integrations/api/client";
import { useToast } from "@/hooks/use-toast";

const EditListing = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      const response = await apiClient.getListing(id);
      setListing(response.listing);
    } catch (error) {
      toast({
        title: "Error loading listing",
        description: error.message,
        variant: "destructive",
      });
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const listingData = {
      title: formData.get('title'),
      description: formData.get('description'),
      quantity: formData.get('quantity'),
      expiryDate: formData.get('expiryDate'),
      location: formData.get('location'),
      category: formData.get('category'),
    };

    try {
      await apiClient.updateListing(id, listingData);
      toast({
        title: "Listing updated",
        description: "Your food listing has been updated successfully!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Failed to update listing",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">Listing not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-xl font-bold">Edit Listing</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Edit Food Listing
              </CardTitle>
              <CardDescription>
                Update the details of your food listing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Food Item Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g., Fresh Bread Loaves"
                    defaultValue={listing.title}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe the food item, quantity, condition, etc."
                    rows={4}
                    defaultValue={listing.description}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      placeholder="e.g., 10 loaves, 5kg"
                      defaultValue={listing.quantity}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      name="category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      defaultValue={listing.category || ""}
                    >
                      <option value="">Select category</option>
                      <option value="bread">Bread & Bakery</option>
                      <option value="produce">Fruits & Vegetables</option>
                      <option value="dairy">Dairy</option>
                      <option value="meat">Meat & Poultry</option>
                      <option value="prepared">Prepared Meals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Best Before Date *
                    </Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      type="date"
                      defaultValue={listing.expiryDate ? new Date(listing.expiryDate).toISOString().split('T')[0] : ""}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Pickup Location *
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g., 123 Main St, City"
                      defaultValue={listing.location}
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/dashboard")}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading} className="flex-1">
                    {isLoading ? "Updating..." : "Update Listing"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
